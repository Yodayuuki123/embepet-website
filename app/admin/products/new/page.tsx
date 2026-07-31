import { db } from "@/lib/db";
import ProductForm from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";

export default async function AdminProductNewPage() {
  const collections = await db.collection.findMany({
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">新建产品</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">填写产品信息，保存后自动上架到前台</p>
      <div className="mt-6">
        <ProductForm product={null} collections={collections} />
      </div>
    </div>
  );
}
