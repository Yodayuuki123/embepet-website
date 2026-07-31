"use client";

import { useTransition } from "react";
import { deleteSubscriber } from "@/lib/actions/admin";

export default function SubscriberRow({
  id,
  email,
  source,
  createdAt,
}: {
  id: string;
  email: string;
  source: string;
  createdAt: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <tr className="border-b border-black/4 last:border-0">
      <td className="px-5 py-3.5 font-medium">{email}</td>
      <td className="px-5 py-3.5 text-black/60">{source}</td>
      <td className="px-5 py-3.5 text-black/50">{createdAt}</td>
      <td className="px-5 py-3.5 text-right">
        <button
          disabled={pending}
          onClick={() => {
            if (confirm(`移除订阅者 ${email}？`)) startTransition(() => deleteSubscriber(id));
          }}
          className="text-[0.82rem] text-red-500 hover:underline disabled:opacity-50"
        >
          移除
        </button>
      </td>
    </tr>
  );
}
