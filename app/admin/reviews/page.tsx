import { db } from "@/lib/db";
import { formatDateCN } from "@/lib/format";
import ReviewModeration from "@/components/admin/ReviewModeration";

export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const reviews = await db.review.findMany({
    include: { product: { select: { name: true, slug: true } } },
    orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    take: 100,
  });

  const pending = reviews.filter((r: any) => r.status === "PENDING");
  const others = reviews.filter((r: any) => r.status !== "PENDING");

  return (
    <div>
      <h1 className="text-2xl font-bold">评价审核</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">
        {pending.length > 0 ? `${pending.length} 条评价等待审核` : "没有待审核的评价"}
      </p>

      <div className="mt-6 space-y-4">
        {[...pending, ...others].map((r) => (
          <ReviewModeration
            key={r.id}
            review={{
              id: r.id,
              authorName: r.authorName,
              petName: r.petName,
              rating: r.rating,
              title: r.title,
              body: r.body,
              status: r.status,
              verified: r.verified,
              productName: r.product.name,
              createdAt: formatDateCN(r.createdAt),
            }}
          />
        ))}
      </div>
    </div>
  );
}
