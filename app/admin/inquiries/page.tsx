import Link from "next/link";
import { db } from "@/lib/db";
import { formatDateCN } from "@/lib/format";
import InquiryCard from "@/components/admin/InquiryCard";

export const dynamic = "force-dynamic";

const TABS = [
  { key: "", label: "全部" },
  { key: "NEW", label: "新询盘" },
  { key: "IN_PROGRESS", label: "跟进中" },
  { key: "QUOTED", label: "已报价" },
  { key: "WON", label: "已成交" },
  { key: "LOST", label: "已流失" },
];

export default async function AdminInquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const inquiries = await db.inquiry.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">B2B 询盘</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">批发 / 私标代工 / 分销合作线索</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.key ? `/admin/inquiries?status=${tab.key}` : "/admin/inquiries"}
            className={`rounded-full px-4 py-1.5 text-[0.85rem] transition-colors ${
              (status ?? "") === tab.key ? "bg-[#1d3f2f] text-white" : "bg-white text-black/60 hover:bg-black/5"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {inquiries.length === 0 ? (
          <p className="rounded-2xl border border-black/8 bg-white px-5 py-10 text-center text-black/40">
            没有符合条件的询盘
          </p>
        ) : null}
        {inquiries.map((inq) => (
          <InquiryCard
            key={inq.id}
            inquiry={{
              id: inq.id,
              type: inq.type,
              company: inq.company,
              contactName: inq.contactName,
              email: inq.email,
              phone: inq.phone,
              country: inq.country,
              website: inq.website,
              volume: inq.volume,
              message: inq.message,
              status: inq.status,
              adminNotes: inq.adminNotes,
              createdAt: formatDateCN(inq.createdAt),
            }}
          />
        ))}
      </div>
    </div>
  );
}
