import { db } from "@/lib/db";
import { formatDateCN } from "@/lib/format";
import { Download } from "lucide-react";
import SubscriberRow from "@/components/admin/SubscriberRow";

export const dynamic = "force-dynamic";

export default async function AdminSubscribersPage() {
  const subscribers = await db.subscriber.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">邮件订阅名单</h1>
          <p className="mt-1 text-[0.88rem] text-black/45">共 {subscribers.length} 位订阅者</p>
        </div>
        <a
          href="/admin/subscribers/export"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-black/12 bg-white px-4 text-[0.9rem] font-medium hover:bg-black/4"
        >
          <Download size={16} /> 导出 CSV
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">邮箱</th>
              <th className="px-5 py-3 font-medium">来源</th>
              <th className="px-5 py-3 font-medium">订阅时间</th>
              <th className="px-5 py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 ? (
              <tr><td colSpan={4} className="px-5 py-10 text-center text-black/40">暂无订阅者</td></tr>
            ) : null}
            {subscribers.map((s: any) => (
              <SubscriberRow key={s.id} id={s.id} email={s.email} source={s.source} createdAt={formatDateCN(s.createdAt)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
