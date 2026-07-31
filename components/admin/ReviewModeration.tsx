"use client";

import { useTransition } from "react";
import { Star } from "lucide-react";
import { moderateReview, deleteReview } from "@/lib/actions/admin";

type Review = {
  id: string;
  authorName: string;
  petName: string | null;
  rating: number;
  title: string;
  body: string;
  status: string;
  verified: boolean;
  productName: string;
  createdAt: string;
};

export default function ReviewModeration({ review }: { review: Review }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className={`rounded-2xl border bg-white p-5 ${review.status === "PENDING" ? "border-amber-300" : "border-black/8"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-black/15"} />
              ))}
            </span>
            <p className="font-semibold">{review.title}</p>
          </div>
          <p className="mt-1 text-[0.8rem] text-black/45">
            {review.authorName}
            {review.petName ? `（宠物：${review.petName}）` : ""} · 商品：{review.productName} · {review.createdAt}
            {review.verified ? " · 已验证购买" : ""}
          </p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[0.75rem] ${
            review.status === "PENDING"
              ? "bg-amber-50 text-amber-700"
              : review.status === "APPROVED"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-600"
          }`}
        >
          {review.status === "PENDING" ? "待审核" : review.status === "APPROVED" ? "已上架" : "已拒绝"}
        </span>
      </div>

      <p className="mt-3 text-[0.9rem] leading-relaxed text-black/75">{review.body}</p>

      <div className="mt-4 flex gap-2.5">
        {review.status !== "APPROVED" ? (
          <button
            disabled={pending}
            onClick={() => startTransition(() => moderateReview(review.id, "APPROVED"))}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-[0.82rem] font-medium text-white hover:opacity-90 disabled:opacity-50"
          >
            通过并上架
          </button>
        ) : null}
        {review.status !== "REJECTED" ? (
          <button
            disabled={pending}
            onClick={() => startTransition(() => moderateReview(review.id, "REJECTED"))}
            className="rounded-lg border border-black/12 px-4 py-2 text-[0.82rem] hover:bg-black/4 disabled:opacity-50"
          >
            拒绝
          </button>
        ) : null}
        <div className="flex-1" />
        <button
          disabled={pending}
          onClick={() => {
            if (confirm("确定永久删除这条评价？")) startTransition(() => deleteReview(review.id));
          }}
          className="text-[0.82rem] text-red-500 hover:underline disabled:opacity-50"
        >
          删除
        </button>
      </div>
    </div>
  );
}
