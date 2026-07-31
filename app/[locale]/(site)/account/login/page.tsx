import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { LoginForm } from "@/components/site/AuthForms";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Sign In", robots: { index: false } };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const session = await getSession();
  if (session) redirect(next || "/account");

  return (
    <div className="mx-auto max-w-md px-5 pb-24 pt-36 md:pt-44">
      <Reveal>
        <p className="eyebrow text-forest-mid">Account</p>
        <h1 className="display-1 mt-2">Welcome back</h1>
        <p className="mt-3 text-ink-soft">Sign in to track orders and manage your pet&apos;s routine.</p>
        <div className="mt-8">
          <LoginForm next={next} />
        </div>
      </Reveal>
    </div>
  );
}
