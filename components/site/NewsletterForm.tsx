"use client";

import { useActionState } from "react";
import { subscribeAction, type FormState } from "@/lib/actions/marketing";
import { ArrowRight } from "lucide-react";

type Labels = { placeholder: string; button: string; success: string; error: string };

const DEFAULT_LABELS: Labels = {
  placeholder: "Your email address",
  button: "Subscribe",
  success: "Welcome to the pack! Check your inbox.",
  error: "Something went wrong. Please try again.",
};

export default function NewsletterForm({
  dark = false,
  source = "footer",
  labels = DEFAULT_LABELS,
}: {
  dark?: boolean;
  source?: string;
  labels?: Labels;
}) {
  const [state, action, pending] = useActionState<FormState, FormData>(subscribeAction, null);

  return (
    <form action={action} className="w-full max-w-md">
      <input type="hidden" name="source" value={source} />
      <div
        className={`flex items-center gap-1 rounded-full border p-1.5 pl-5 transition-colors ${
          dark ? "border-cream/25 bg-cream/8 focus-within:border-cream/50" : "border-ink/20 bg-white/60 focus-within:border-forest"
        }`}
      >
        <input
          type="email"
          name="email"
          required
          placeholder={labels.placeholder}
          className={`w-full bg-transparent text-sm outline-none ${dark ? "text-cream placeholder:text-cream/45" : "text-ink placeholder:text-ink/40"}`}
          aria-label={labels.placeholder}
        />
        <button
          type="submit"
          disabled={pending}
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-60 ${
            dark ? "bg-amber text-forest-deep" : "bg-forest text-cream"
          }`}
          aria-label={labels.button}
        >
          <ArrowRight size={17} className={pending ? "animate-pulse" : ""} />
        </button>
      </div>
      {state && (
        <p className={`mt-2.5 pl-5 text-[0.82rem] ${state.ok ? (dark ? "text-amber-soft" : "text-moss") : "text-clay"}`} role="status">
          {state.ok ? labels.success : state.message || labels.error}
        </p>
      )}
    </form>
  );
}
