"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export type AdminFormState = { error?: string; success?: string } | null;

function revalidateStore() {
  revalidatePath("/", "layout");
}

// ---------- 产品 ----------

export async function saveProduct(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");

  const parseJsonField = (name: string, fallback = "[]") => {
    const raw = String(formData.get(name) ?? fallback).trim() || fallback;
    try {
      JSON.parse(raw);
      return raw;
    } catch {
      throw new Error(`字段 ${name} 不是合法的 JSON`);
    }
  };

  try {
    const data = {
      slug: String(formData.get("slug") ?? "").trim(),
      name: String(formData.get("name") ?? "").trim(),
      subtitle: String(formData.get("subtitle") ?? "").trim(),
      answerCapsule: String(formData.get("answerCapsule") ?? "").trim(),
      description: String(formData.get("description") ?? ""),
      species: String(formData.get("species") ?? "dog"),
      format: String(formData.get("format") ?? "chew"),
      colorKey: String(formData.get("colorKey") ?? "forest"),
      badges: String(formData.get("badges") ?? ""),
      benefits: parseJsonField("benefits"),
      ingredients: parseJsonField("ingredients"),
      feedingGuide: parseJsonField("feedingGuide"),
      faqs: parseJsonField("faqs"),
      images: parseJsonField("images"),
      featured: formData.get("featured") === "on",
      bestSeller: formData.get("bestSeller") === "on",
      status: String(formData.get("status") ?? "ACTIVE"),
      seoTitle: String(formData.get("seoTitle") ?? "").trim() || null,
      seoDescription: String(formData.get("seoDescription") ?? "").trim() || null,
    };
    if (!data.slug || !data.name) return { error: "slug 和产品名必填" };

    let productId = id;
    if (id) {
      await db.product.update({ where: { id }, data });
    } else {
      const created = await db.product.create({ data });
      productId = created.id;
    }

    // 集合关联
    const collectionIds = formData.getAll("collectionIds").map(String);
    await db.productCollection.deleteMany({ where: { productId } });
    if (collectionIds.length) {
      await db.productCollection.createMany({
        data: collectionIds.map((collectionId) => ({ productId, collectionId })),
      });
    }

    // 变体：JSON 数组 [{id?, name, sku, priceCents, compareAtCents, stock, isDefault}]
    const variantsRaw = String(formData.get("variants") ?? "[]");
    const variants = JSON.parse(variantsRaw) as {
      id?: string;
      name: string;
      sku: string;
      priceCents: number;
      compareAtCents?: number | null;
      stock: number;
      isDefault?: boolean;
    }[];
    const keepIds = variants.filter((v) => v.id).map((v) => v.id!);
    await db.variant.deleteMany({ where: { productId, id: { notIn: keepIds } } });
    for (let i = 0; i < variants.length; i++) {
      const v = variants[i];
      const variantData = {
        name: v.name,
        sku: v.sku,
        priceCents: Math.round(Number(v.priceCents)),
        compareAtCents: v.compareAtCents ? Math.round(Number(v.compareAtCents)) : null,
        stock: Math.round(Number(v.stock)),
        isDefault: !!v.isDefault,
        sortOrder: i,
      };
      if (v.id) {
        await db.variant.update({ where: { id: v.id }, data: variantData });
      } else {
        await db.variant.create({ data: { ...variantData, productId } });
      }
    }

    revalidateStore();
    if (!id) redirect(`/admin/products/${productId}`);
    return { success: "已保存" };
  } catch (e) {
    if (e && typeof e === "object" && "digest" in e) throw e; // redirect
    return { error: e instanceof Error ? e.message : "保存失败" };
  }
}

export async function deleteProduct(id: string) {
  await requireAdmin();
  await db.product.delete({ where: { id } });
  revalidateStore();
  redirect("/admin/products");
}

// ---------- 订单 ----------

export async function updateOrder(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const id = String(formData.get("id"));
  await db.order.update({
    where: { id },
    data: {
      status: String(formData.get("status") ?? "PENDING"),
      trackingNumber: String(formData.get("trackingNumber") ?? "").trim() || null,
      carrier: String(formData.get("carrier") ?? "").trim() || null,
      adminNotes: String(formData.get("adminNotes") ?? "").trim() || null,
    },
  });
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${id}`);
  return { success: "订单已更新" };
}

// ---------- 询盘 ----------

export async function updateInquiry(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const id = String(formData.get("id"));
  await db.inquiry.update({
    where: { id },
    data: {
      status: String(formData.get("status") ?? "NEW"),
      adminNotes: String(formData.get("adminNotes") ?? "").trim() || null,
    },
  });
  revalidatePath("/admin/inquiries");
  return { success: "询盘已更新" };
}

// ---------- 博客 ----------

export async function savePost(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  try {
    const parseJsonField = (name: string) => {
      const raw = String(formData.get(name) ?? "[]").trim() || "[]";
      JSON.parse(raw);
      return raw;
    };
    const data = {
      slug: String(formData.get("slug") ?? "").trim(),
      title: String(formData.get("title") ?? "").trim(),
      excerpt: String(formData.get("excerpt") ?? "").trim(),
      answerCapsule: String(formData.get("answerCapsule") ?? "").trim(),
      content: String(formData.get("content") ?? ""),
      category: String(formData.get("category") ?? "guides"),
      tags: String(formData.get("tags") ?? ""),
      species: String(formData.get("species") ?? "dog"),
      authorName: String(formData.get("authorName") ?? "").trim(),
      authorTitle: String(formData.get("authorTitle") ?? "").trim(),
      authorBio: String(formData.get("authorBio") ?? "").trim(),
      reviewedBy: String(formData.get("reviewedBy") ?? "").trim(),
      pillar: formData.get("pillar") === "on",
      published: formData.get("published") === "on",
      readMinutes: Math.max(1, Number(formData.get("readMinutes") ?? 5)),
      faqs: parseJsonField("faqs"),
      sources: parseJsonField("sources"),
      coverColorKey: String(formData.get("coverColorKey") ?? "forest"),
      seoTitle: String(formData.get("seoTitle") ?? "").trim() || null,
      seoDescription: String(formData.get("seoDescription") ?? "").trim() || null,
    };
    if (!data.slug || !data.title) return { error: "slug 和标题必填" };

    if (id) {
      await db.post.update({ where: { id }, data });
    } else {
      const created = await db.post.create({ data });
      revalidateStore();
      redirect(`/admin/posts/${created.id}`);
    }
    revalidateStore();
    return { success: "已保存" };
  } catch (e) {
    if (e && typeof e === "object" && "digest" in e) throw e;
    return { error: e instanceof Error ? e.message : "保存失败（检查 JSON 字段格式）" };
  }
}

export async function deletePost(id: string) {
  await requireAdmin();
  await db.post.delete({ where: { id } });
  revalidateStore();
  redirect("/admin/posts");
}

// ---------- 评价审核 ----------

async function recalcProductRating(productId: string) {
  const agg = await db.review.aggregate({
    where: { productId, status: "APPROVED" },
    _avg: { rating: true },
    _count: true,
  });
  await db.product.update({
    where: { id: productId },
    data: {
      ratingAvg: Math.round((agg._avg.rating ?? 0) * 10) / 10,
      ratingCount: agg._count,
    },
  });
}

export async function moderateReview(id: string, status: "APPROVED" | "REJECTED") {
  await requireAdmin();
  const review = await db.review.update({ where: { id }, data: { status } });
  await recalcProductRating(review.productId);
  revalidateStore();
  revalidatePath("/admin/reviews");
}

export async function deleteReview(id: string) {
  await requireAdmin();
  const review = await db.review.delete({ where: { id } });
  await recalcProductRating(review.productId);
  revalidateStore();
  revalidatePath("/admin/reviews");
}

// ---------- 优惠券 ----------

export async function saveCoupon(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const data = {
    code: String(formData.get("code") ?? "").trim().toUpperCase(),
    kind: String(formData.get("kind") ?? "percent"),
    value: Math.round(Number(formData.get("value") ?? 0)),
    active: formData.get("active") === "on",
    minSubtotalCents: Math.round(Number(formData.get("minSubtotal") ?? 0) * 100),
    maxUses: formData.get("maxUses") ? Math.round(Number(formData.get("maxUses"))) : null,
    endsAt: formData.get("endsAt") ? new Date(String(formData.get("endsAt"))) : null,
  };
  if (!data.code || data.value <= 0) return { error: "代码和面值必填" };
  try {
    if (id) {
      await db.coupon.update({ where: { id }, data });
    } else {
      await db.coupon.create({ data });
    }
    revalidatePath("/admin/coupons");
    return { success: "已保存" };
  } catch {
    return { error: "保存失败（代码可能重复）" };
  }
}

export async function deleteCoupon(id: string) {
  await requireAdmin();
  await db.coupon.delete({ where: { id } });
  revalidatePath("/admin/coupons");
}

// ---------- 站点设置 ----------

export async function saveSettings(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const keys = [
    "brandName", "brandNameCn", "brandTagline", "companyLegalName", "supportEmail", "b2bEmail", "phone",
    "announcement", "instagram", "facebook", "tiktok", "youtube",
    "freeShippingThresholdCents", "flatShippingCents",
    "seoDefaultTitle", "seoDefaultDescription",
  ];
  for (const key of keys) {
    const value = formData.get(key);
    if (value != null) {
      await db.siteSetting.upsert({
        where: { key },
        create: { key, value: String(value) },
        update: { value: String(value) },
      });
    }
  }
  revalidateStore();
  return { success: "设置已保存，前台即时生效" };
}

// ---------- 重定向 ----------

export async function saveRedirect(_prev: AdminFormState, formData: FormData): Promise<AdminFormState> {
  await requireAdmin();
  const fromPath = String(formData.get("fromPath") ?? "").trim();
  const toPath = String(formData.get("toPath") ?? "").trim();
  if (!fromPath.startsWith("/") || !toPath.startsWith("/")) {
    return { error: "路径必须以 / 开头" };
  }
  try {
    await db.redirect.upsert({
      where: { fromPath },
      create: { fromPath, toPath, permanent: formData.get("permanent") === "on" },
      update: { toPath, permanent: formData.get("permanent") === "on" },
    });
    revalidatePath("/admin/seo");
    return { success: "重定向已保存" };
  } catch {
    return { error: "保存失败" };
  }
}

export async function deleteRedirect(id: string) {
  await requireAdmin();
  await db.redirect.delete({ where: { id } });
  revalidatePath("/admin/seo");
}

export async function deleteSubscriber(id: string) {
  await requireAdmin();
  await db.subscriber.delete({ where: { id } });
  revalidatePath("/admin/subscribers");
}
