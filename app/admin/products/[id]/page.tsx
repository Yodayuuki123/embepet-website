import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ProductForm from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";

export default async function AdminProductEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [product, collections] = await Promise.all([
    db.product.findUnique({
      where: { id },
      include: { variants: { orderBy: { sortOrder: "asc" } }, collections: true },
    }),
    db.collection.findMany({ orderBy: { sortOrder: "asc" }, select: { id: true, name: true } }),
  ]);
  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">编辑产品</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">{product.name}</p>
      <div className="mt-6">
        <ProductForm
          product={{
            id: product.id,
            slug: product.slug,
            name: product.name,
            subtitle: product.subtitle,
            answerCapsule: product.answerCapsule,
            description: product.description,
            species: product.species,
            format: product.format,
            colorKey: product.colorKey,
            badges: product.badges,
            benefits: product.benefits,
            ingredients: product.ingredients,
            feedingGuide: product.feedingGuide,
            faqs: product.faqs,
            images: product.images,
            featured: product.featured,
            bestSeller: product.bestSeller,
            status: product.status,
            seoTitle: product.seoTitle,
            seoDescription: product.seoDescription,
            variants: product.variants.map((v: any) => ({
              id: v.id,
              name: v.name,
              sku: v.sku,
              priceCents: v.priceCents,
              compareAtCents: v.compareAtCents,
              stock: v.stock,
              isDefault: v.isDefault,
            })),
            collectionIds: product.collections.map((c: any) => c.collectionId),
          }}
          collections={collections}
        />
      </div>
    </div>
  );
}
