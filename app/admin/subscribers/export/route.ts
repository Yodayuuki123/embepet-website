import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session || (session.role !== "ADMIN" && session.role !== "STAFF")) {
    return new Response("Unauthorized", { status: 401 });
  }
  const subscribers = await db.subscriber.findMany({ orderBy: { createdAt: "desc" } });
  const rows = [
    "email,source,subscribed_at",
    ...subscribers.map((s: any) => `${s.email},${s.source},${s.createdAt.toISOString()}`),
  ];
  return new Response(rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="embepet-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
