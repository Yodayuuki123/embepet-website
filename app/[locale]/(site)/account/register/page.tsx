import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { RegisterForm } from "@/components/site/AuthForms";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Create Account", robots: { index: false } };

export default async function RegisterPage() {
  const session = await getSession();
  if (session) redirect("/account");

  return (
    <div className="mx-auto max-w-md px-5 pb-24 pt-36 md:pt-44">
      <Reveal>
        <p className="eyebrow text-forest-mid">Account</p>
        <h1 className="display-1 mt-2">Join the pack</h1>
        <p className="mt-3 text-ink-soft">Create an account for faster checkout, order history and wishlist.</p>
        <div className="mt-8">
          <RegisterForm />
        </div>
      </Reveal>
    </div>
  );
}
