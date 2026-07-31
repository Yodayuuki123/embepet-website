"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { setSessionCookie, clearSessionCookie, getSession } from "@/lib/auth";
import { CART_COOKIE } from "@/lib/cart";
import { localePath } from "@/lib/i18n";

export type AuthState = { error?: string } | null;

const registerSchema = z.object({
  name: z.string().min(1, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

async function adoptGuestCart(userId: string) {
  const store = await cookies();
  const cartId = store.get(CART_COOKIE)?.value;
  if (cartId) {
    await db.cart.updateMany({ where: { id: cartId, userId: null }, data: { userId } });
  }
}

export async function register(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email: email.toLowerCase() } });
  if (existing) return { error: "An account with this email already exists" };

  const user = await db.user.create({
    data: {
      name,
      email: email.toLowerCase(),
      passwordHash: await bcrypt.hash(password, 10),
    },
  });
  await setSessionCookie({ uid: user.id, email: user.email, name: user.name, role: "CUSTOMER" });
  await adoptGuestCart(user.id);
  redirect(await localePath("/account"));
}

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "");

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { error: "Incorrect email or password" };
  }
  await setSessionCookie({
    uid: user.id,
    email: user.email,
    name: user.name,
    role: user.role as "CUSTOMER" | "ADMIN" | "STAFF",
  });
  await adoptGuestCart(user.id);
  if (user.role === "ADMIN" || user.role === "STAFF") redirect("/admin");
  redirect(await localePath(next && next.startsWith("/") ? next : "/account"));
}

export async function adminLogin(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const password = String(formData.get("password") ?? "");
  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { error: "邮箱或密码错误" };
  }
  if (user.role !== "ADMIN" && user.role !== "STAFF") {
    return { error: "该账号没有后台权限" };
  }
  await setSessionCookie({
    uid: user.id,
    email: user.email,
    name: user.name,
    role: user.role as "ADMIN" | "STAFF",
  });
  redirect("/admin");
}

export async function logout() {
  await clearSessionCookie();
  redirect(await localePath("/"));
}

export async function logoutAdmin() {
  await clearSessionCookie();
  redirect("/admin/login");
}

export async function requireLogin(nextPath: string) {
  const session = await getSession();
  if (!session) redirect(await localePath(`/account/login?next=${encodeURIComponent(nextPath)}`));
}
