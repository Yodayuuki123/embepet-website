"use client";

import { useFormStatus } from "react-dom";
import type { AdminFormState } from "@/lib/actions/admin";

export function SubmitButton({ children = "保存", className = "" }: { children?: React.ReactNode; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex h-10 items-center justify-center rounded-xl bg-[#1d3f2f] px-5 text-[0.9rem] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 ${className}`}
    >
      {pending ? "保存中…" : children}
    </button>
  );
}

export function FormMsg({ state }: { state: AdminFormState }) {
  if (!state) return null;
  if (state.error) {
    return <p className="rounded-lg bg-red-50 px-3 py-2 text-[0.85rem] text-red-600">{state.error}</p>;
  }
  if (state.success) {
    return <p className="rounded-lg bg-emerald-50 px-3 py-2 text-[0.85rem] text-emerald-700">{state.success}</p>;
  }
  return null;
}

export const inputCls =
  "w-full rounded-xl border border-black/12 bg-white px-3.5 py-2.5 text-[0.9rem] outline-none transition-colors focus:border-[#1d3f2f]";
export const labelCls = "mb-1.5 block text-[0.82rem] font-medium text-black/60";

export function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
      {hint ? <p className="mt-1 text-[0.75rem] text-black/40">{hint}</p> : null}
    </div>
  );
}
