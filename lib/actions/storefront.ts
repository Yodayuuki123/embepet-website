"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export type FormState = { error?: string; success?: string } | null;

// ---------- 产品评价 ----------

const reviewSchema = z.object({
  productId: z.string().min(1),
  authorName: z.string().min(1, "Please enter your name").max(60),
  petName: z.string().max(60).optional(),
  rating: z.coerce.number().int().min(1).max(5),
  title: z.string().min(1, "Please add a title").max(120),
  body: z.string().min(10, "Review must be at least 10 characters").max(2000),
});

export async function submitReview(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = reviewSchema.safeParse({
    productId: formData.get("productId"),
    authorName: formData.get("authorName"),
    petName: formData.get("petName") || undefined,
    rating: formData.get("rating"),
    title: formData.get("title"),
    body: formData.get("body"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const session = await getSession();
  await db.review.create({
    data: {
      ...parsed.data,
      petName: parsed.data.petName ?? null,
      userId: session?.uid ?? null,
      status: "PENDING",
    },
  });
  return { success: "Thanks! Your review is awaiting moderation and will appear shortly." };
}

// ---------- B2B 询盘 ----------

const inquirySchema = z.object({
  type: z.enum(["wholesale", "private_label", "distributor", "other"]),
  company: z.string().min(1, "Company name is required").max(120),
  contactName: z.string().min(1, "Contact name is required").max(80),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().max(40).optional(),
  country: z.string().max(60).optional(),
  website: z.string().max(200).optional(),
  volume: z.string().max(120).optional(),
  message: z.string().min(10, "Tell us a little more about your project").max(4000),
});

export async function submitInquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = inquirySchema.safeParse({
    type: formData.get("type") ?? "wholesale",
    company: formData.get("company"),
    contactName: formData.get("contactName"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    country: formData.get("country") || undefined,
    website: formData.get("website") || undefined,
    volume: formData.get("volume") || undefined,
    message: formData.get("message"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  await db.inquiry.create({ data: parsed.data });
  console.log(`[邮件模拟] 新B2B询盘 -> partners: ${parsed.data.company} (${parsed.data.email})`);
  return {
    success: "Inquiry received. Our partnerships team will reply within one business day.",
  };
}

// ---------- 邮件订阅 ----------

export async function subscribe(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").toLowerCase().trim();
  const source = String(formData.get("source") ?? "footer");
  if (!z.string().email().safeParse(email).success) {
    return { error: "Please enter a valid email" };
  }
  await db.subscriber.upsert({
    where: { email },
    create: { email, source },
    update: {},
  });
  return { success: "You're in! Watch your inbox for pet health tips and launch news." };
}

// ---------- 心愿单 ----------

export async function toggleWishlist(productId: string, path: string) {
  const session = await getSession();
  if (!session) return { ok: false as const, needLogin: true };
  const existing = await db.wishlistItem.findUnique({
    where: { userId_productId: { userId: session.uid, productId } },
  });
  if (existing) {
    await db.wishlistItem.delete({ where: { id: existing.id } });
  } else {
    await db.wishlistItem.create({ data: { userId: session.uid, productId } });
  }
  revalidatePath(path);
  revalidatePath("/account/wishlist");
  return { ok: true as const, added: !existing };
}

// ---------- 地址管理 ----------

const addressSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  line1: z.string().min(1, "Street address is required"),
  line2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(3, "ZIP is required"),
  phone: z.string().optional(),
});

export async function saveAddress(_prev: FormState, formData: FormData): Promise<FormState> {
  const session = await getSession();
  if (!session) return { error: "Please sign in first" };
  const parsed = addressSchema.safeParse({
    fullName: formData.get("fullName"),
    line1: formData.get("line1"),
    line2: formData.get("line2") || undefined,
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    phone: formData.get("phone") || undefined,
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const id = String(formData.get("id") ?? "");
  const data = {
    ...parsed.data,
    line2: parsed.data.line2 ?? null,
    phone: parsed.data.phone ?? null,
    country: "US",
    userId: session.uid,
  };
  if (id) {
    await db.address.updateMany({ where: { id, userId: session.uid }, data });
  } else {
    await db.address.create({ data });
  }
  revalidatePath("/account/addresses");
  return { success: "Address saved" };
}

export async function deleteAddress(id: string) {
  const session = await getSession();
  if (!session) return;
  await db.address.deleteMany({ where: { id, userId: session.uid } });
  revalidatePath("/account/addresses");
}
