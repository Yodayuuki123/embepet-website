"use client";

import { useActionState } from "react";
import { updateInquiry, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, inputCls } from "./ui";

const TYPE_LABEL: Record<string, string> = {
  wholesale: "批发",
  private_label: "私标/OEM",
  distributor: "分销",
  other: "其他",
};

const STATUS_OPTIONS = [
  ["NEW", "新询盘"],
  ["IN_PROGRESS", "跟进中"],
  ["QUOTED", "已报价"],
  ["WON", "已成交"],
  ["LOST", "已流失"],
] as const;

type Inquiry = {
  id: string;
  type: string;
  company: string;
  contactName: string;
  email: string;
  phone: string | null;
  country: string | null;
  website: string | null;
  volume: string | null;
  message: string;
  status: string;
  adminNotes: string | null;
  createdAt: string;
};

export default function InquiryCard({ inquiry }: { inquiry: Inquiry }) {
  const [state, action] = useActionState<AdminFormState, FormData>(updateInquiry, null);

  return (
    <div className="rounded-2xl border border-black/8 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="font-semibold">{inquiry.company}</h2>
            <span className="rounded-full bg-[#1d3f2f]/8 px-2.5 py-0.5 text-[0.72rem] font-medium text-[#1d3f2f]">
              {TYPE_LABEL[inquiry.type] ?? inquiry.type}
            </span>
            {inquiry.status === "NEW" ? (
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[0.72rem] font-medium text-red-600">未处理</span>
            ) : null}
          </div>
          <p className="mt-1.5 text-[0.85rem] text-black/60">
            {inquiry.contactName} · <a className="text-[#1d3f2f] hover:underline" href={`mailto:${inquiry.email}`}>{inquiry.email}</a>
            {inquiry.phone ? ` · ${inquiry.phone}` : ""}
            {inquiry.country ? ` · ${inquiry.country}` : ""}
          </p>
          {inquiry.website ? (
            <a href={inquiry.website} target="_blank" rel="noreferrer" className="text-[0.8rem] text-black/45 hover:underline">
              {inquiry.website}
            </a>
          ) : null}
        </div>
        <p className="text-[0.78rem] text-black/40">{inquiry.createdAt}</p>
      </div>

      {inquiry.volume ? <p className="mt-3 text-[0.85rem]"><span className="text-black/45">预计量：</span>{inquiry.volume}</p> : null}
      <p className="mt-2 whitespace-pre-wrap rounded-xl bg-black/3 p-3.5 text-[0.88rem] leading-relaxed text-black/75">
        {inquiry.message}
      </p>

      <form action={action} className="mt-4 flex flex-wrap items-end gap-3">
        <input type="hidden" name="id" value={inquiry.id} />
        <div className="w-36">
          <label className="mb-1 block text-[0.75rem] text-black/45">跟进状态</label>
          <select name="status" defaultValue={inquiry.status} className={inputCls}>
            {STATUS_OPTIONS.map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>
        </div>
        <div className="min-w-64 flex-1">
          <label className="mb-1 block text-[0.75rem] text-black/45">内部跟进备注</label>
          <input name="adminNotes" defaultValue={inquiry.adminNotes ?? ""} placeholder="报价、跟进记录…" className={inputCls} />
        </div>
        <SubmitButton>更新</SubmitButton>
        <FormMsg state={state} />
      </form>
    </div>
  );
}
