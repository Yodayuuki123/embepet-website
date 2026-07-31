"use client";

import Link from "@/components/site/A";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { login, register, type AuthState } from "@/lib/actions/auth";

const field =
  "w-full rounded-xl border border-line bg-white/70 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-ink-soft/50 focus:border-forest/60";

export function LoginForm({ next }: { next?: string }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(login, null);
  return (
    <form action={action} className="space-y-3">
      {next ? <input type="hidden" name="next" value={next} /> : null}
      <input className={field} type="email" name="email" required placeholder="Email address" autoComplete="email" />
      <input className={field} type="password" name="password" required placeholder="Password" autoComplete="current-password" />
      {state?.error ? <p className="text-[0.88rem] text-clay">{state.error}</p> : null}
      <button
        disabled={pending}
        className="btn-liquid flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest font-semibold text-cream disabled:opacity-60"
        style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : null} Sign in
      </button>
      <p className="pt-1 text-center text-[0.9rem] text-ink-soft">
        New here?{" "}
        <Link href="/account/register" className="link-underline font-medium text-forest-mid">
          Create an account
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(register, null);
  return (
    <form action={action} className="space-y-3">
      <input className={field} name="name" required placeholder="Your name" autoComplete="name" />
      <input className={field} type="email" name="email" required placeholder="Email address" autoComplete="email" />
      <input
        className={field}
        type="password"
        name="password"
        required
        minLength={8}
        placeholder="Password (8+ characters)"
        autoComplete="new-password"
      />
      {state?.error ? <p className="text-[0.88rem] text-clay">{state.error}</p> : null}
      <button
        disabled={pending}
        className="btn-liquid flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest font-semibold text-cream disabled:opacity-60"
        style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : null} Create account
      </button>
      <p className="pt-1 text-center text-[0.9rem] text-ink-soft">
        Already have an account?{" "}
        <Link href="/account/login" className="link-underline font-medium text-forest-mid">
          Sign in
        </Link>
      </p>
    </form>
  );
}
