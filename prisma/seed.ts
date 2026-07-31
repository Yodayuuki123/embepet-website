import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { collectionsData } from "./data/collections";
import { dogProducts } from "./data/products-dogs";
import { catAndSharedProducts } from "./data/products-cats";
import { postsData } from "./data/posts";
import { reviewsData } from "./data/reviews";

const db = new PrismaClient();

async function main() {
  console.log("🌱 清空旧数据…");
  await db.orderItem.deleteMany();
  await db.order.deleteMany();
  await db.cartItem.deleteMany();
  await db.cart.deleteMany();
  await db.wishlistItem.deleteMany();
  await db.review.deleteMany();
  await db.productCollection.deleteMany();
  await db.variant.deleteMany();
  await db.product.deleteMany();
  await db.collection.deleteMany();
  await db.post.deleteMany();
  await db.inquiry.deleteMany();
  await db.coupon.deleteMany();
  await db.subscriber.deleteMany();
  await db.address.deleteMany();
  await db.user.deleteMany();
  await db.siteSetting.deleteMany();
  await db.redirect.deleteMany();

  console.log("🌱 站点设置…");
  const settings: Record<string, string> = {
    brandName: "EMBEPET",
    legalName: "Embepet Biotech (Shenzhen) Co., Ltd.",
    contactEmail: "care@embepet.com",
    b2bEmail: "b2b@embepet.com",
    whatsapp: "+86 138 0000 0000",
    announcement: "Free US shipping over $49 · 90-day taste guarantee",
    instagram: "https://instagram.com/embepet",
    facebook: "https://facebook.com/embepet",
    tiktok: "https://tiktok.com/@embepet",
    youtube: "https://youtube.com/@embepet",
    freeShippingThresholdCents: "4900",
    flatShippingCents: "599",
  };
  for (const [key, value] of Object.entries(settings)) {
    await db.siteSetting.create({ data: { key, value } });
  }

  console.log("🌱 用户…");
  await db.user.create({
    data: {
      email: "admin@embepet.com",
      name: "管理员",
      passwordHash: await bcrypt.hash("admin123", 10),
      role: "ADMIN",
    },
  });
  const demo = await db.user.create({
    data: {
      email: "demo@embepet.com",
      name: "Demo Customer",
      passwordHash: await bcrypt.hash("demo1234", 10),
      role: "CUSTOMER",
    },
  });

  console.log("🌱 集合…");
  const collectionMap = new Map<string, string>();
  for (const c of collectionsData) {
    const created = await db.collection.create({
      data: {
        slug: c.slug,
        name: c.name,
        tagline: c.tagline,
        description: c.description,
        kind: c.kind,
        colorKey: c.colorKey,
        icon: c.icon,
        sortOrder: c.sortOrder,
        translations: c.translations,
      },
    });
    collectionMap.set(c.slug, created.id);
  }

  console.log("🌱 产品与变体…");
  const allProducts = [...dogProducts, ...catAndSharedProducts];
  const productMap = new Map<string, string>();
  for (const p of allProducts) {
    const created = await db.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        subtitle: p.subtitle,
        answerCapsule: p.answerCapsule,
        description: p.description,
        species: p.species,
        format: p.format,
        colorKey: p.colorKey,
        badges: p.badges,
        benefits: JSON.stringify(p.benefits),
        ingredients: JSON.stringify(p.ingredients),
        feedingGuide: JSON.stringify(p.feedingGuide),
        faqs: JSON.stringify(p.faqs),
        images: JSON.stringify(p.images),
        translations: p.translations,
        featured: p.featured,
        bestSeller: p.bestSeller,
        variants: {
          create: p.variants.map((v, i) => {
            const compareAt = (v as { compareAtCents?: number }).compareAtCents;
            return {
              name: v.name,
              sku: v.sku,
              priceCents: v.priceCents,
              compareAtCents: compareAt ?? null,
              stock: 200,
              isDefault: (v as { isDefault?: boolean }).isDefault ?? i === 0,
              sortOrder: i,
            };
          }),
        },
        collections: {
          create: p.collections
            .filter((slug) => collectionMap.has(slug))
            .map((slug) => ({ collectionId: collectionMap.get(slug)! })),
        },
      },
    });
    productMap.set(p.slug, created.id);
  }

  console.log("🌱 评价…");
  for (const r of reviewsData) {
    const productId = productMap.get(r.productSlug);
    if (!productId) continue;
    await db.review.create({
      data: {
        productId,
        authorName: r.authorName,
        petName: r.petName ?? null,
        rating: r.rating,
        title: r.title,
        body: r.body,
        status: "APPROVED",
        verified: r.verified,
        createdAt: new Date(Date.now() - r.daysAgo * 24 * 3600 * 1000),
      },
    });
  }

  // 回写产品评分聚合
  for (const [slug, productId] of productMap) {
    const agg = await db.review.aggregate({
      where: { productId, status: "APPROVED" },
      _avg: { rating: true },
      _count: true,
    });
    await db.product.update({
      where: { id: productId },
      data: {
        ratingAvg: Math.round((agg._avg.rating ?? 0) * 10) / 10,
        ratingCount: agg._count,
      },
    });
    void slug;
  }

  console.log("🌱 博客文章…");
  for (const [i, post] of postsData.entries()) {
    await db.post.create({
      data: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        answerCapsule: post.answerCapsule,
        content: post.content,
        category: post.category,
        tags: post.tags,
        species: post.species,
        authorName: post.authorName,
        authorTitle: post.authorTitle,
        authorBio: post.authorBio,
        reviewedBy: post.reviewedBy,
        pillar: post.pillar,
        readMinutes: post.readMinutes,
        faqs: JSON.stringify(post.faqs),
        sources: JSON.stringify(post.sources),
        coverColorKey: post.coverColorKey,
        translations: post.translations,
        publishedAt: new Date(Date.now() - (i + 2) * 5 * 24 * 3600 * 1000),
      },
    });
  }

  console.log("🌱 优惠券与演示订单…");
  await db.coupon.create({
    data: { code: "WELCOME10", kind: "percent", value: 10, minSubtotalCents: 2000 },
  });
  await db.coupon.create({
    data: { code: "PACK15", kind: "percent", value: 15, minSubtotalCents: 6000 },
  });

  // 一条演示订单，让后台仪表盘不至于空白
  const jointProduct = await db.product.findUnique({
    where: { slug: "hip-joint-mobility-chews" },
    include: { variants: true },
  });
  if (jointProduct) {
    const v = jointProduct.variants[0];
    await db.order.create({
      data: {
        number: "EP-20260718-DEMO1",
        userId: demo.id,
        email: demo.email,
        status: "PAID",
        subtotalCents: v.priceCents * 2,
        shippingCents: 0,
        totalCents: v.priceCents * 2,
        paymentMethod: "dev_mock",
        shippingAddress: JSON.stringify({
          fullName: "Demo Customer",
          line1: "100 Main St",
          city: "Austin",
          state: "TX",
          zip: "73301",
          country: "US",
        }),
        items: {
          create: [
            {
              variantId: v.id,
              productSlug: jointProduct.slug,
              productName: jointProduct.name,
              variantName: v.name,
              colorKey: jointProduct.colorKey,
              format: jointProduct.format,
              unitCents: v.priceCents,
              qty: 2,
            },
          ],
        },
      },
    });
  }

  console.log("✅ 种子数据完成");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
