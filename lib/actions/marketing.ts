"use server";

import { z } from "zod";
import { db } from "@/lib/db";

export type FormState = { ok: boolean; message: string } | null;

export async function subscribeAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = z.string().email().safeParse(formData.get("email"));
  if (!parsed.success) return { ok: false, message: "Please enter a valid email." };
  const source = String(formData.get("source") ?? "footer");
  try {
    await db.subscriber.upsert({
      where: { email: parsed.data.toLowerCase() },
      update: {},
      create: { email: parsed.data.toLowerCase(), source },
    });
    return { ok: true, message: "Welcome to the pack! Check your inbox for 10% off." };
  } catch {
    return { ok: false, message: "Something went wrong — please try again." };
  }
}
