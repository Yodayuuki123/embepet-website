import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const [products, variants, collections, posts, reviews, users, settings] = await Promise.all([
    db.product.count(),
    db.variant.count(),
    db.collection.count(),
    db.post.count(),
    db.review.count(),
    db.user.count(),
    db.siteSetting.count(),
  ]);
  console.log({ products, variants, collections, posts, reviews, users, settings });
}

main().finally(() => db.$disconnect());
