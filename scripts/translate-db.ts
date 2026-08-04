import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting translation update...");

  const products = [
    {
      slug: "hip-joint-mobility-chews",
      zh: {
        name: "关节呵护软颗粒",
        subtitle: "支持关节灵活性与软骨健康",
        answerCapsule: "富含氨基葡萄糖、软骨素和MSM，专为支持中老年犬关节健康设计，提高活动能力。",
        description: "我们的高销量关节护理系列。采用适口性极佳的肉基质软颗粒，包含临床验证的关节支持成分，适合长期每日食用。是任何宠物健康品牌的支柱产品。",
      }
    },
    {
      slug: "probiotic-gut-health-chews",
      zh: {
        name: "益生菌肠胃调理软颗粒",
        subtitle: "支持消化系统平衡与免疫力",
        answerCapsule: "多菌株益生菌配合益生元纤维和南瓜粉，改善便便质量，维持肠道菌群平衡。",
        description: "每日必备的消化健康补充剂，适用于猫犬。多菌株配方配合天然成分，提高吸收率，是高复购率的核心单品。",
      }
    },
    {
      slug: "skin-coat-salmon-chews",
      zh: {
        name: "美毛护肤三文鱼油软颗粒",
        subtitle: "亮泽毛发，支持皮肤屏障",
        answerCapsule: "富含Omega-3（EPA/DHA）、生物素和锌，有效减少掉毛，缓解皮肤干燥瘙痒。",
        description: "专为美毛需求设计的软颗粒。深海三文鱼油提供必需脂肪酸，帮助宠物焕发毛发光泽，是零售渠道表现强劲的高性价比产品。",
      }
    },
    {
      slug: "multivitamin-10-in-1-chews",
      zh: {
        name: "10合1复合维生素营养软颗粒",
        subtitle: "全方位日常营养支持",
        answerCapsule: "涵盖免疫、关节、心脏、消化等10大功能领域的全面营养补充，适合各生命阶段。",
        description: "全方位的日常保健单品，一粒涵盖十大功能区域。是大多数品牌首选的入门级SKU，具有广泛的市场吸引力和极高的性价比。",
      }
    },
    {
      slug: "omega-3-wild-fish-oil",
      zh: {
        name: "深海野生鱼油（泵装）",
        subtitle: "纯净Omega-3补充，亮毛护心",
        answerCapsule: "纯净野生来源鱼油，高浓度EPA和DHA，支持皮肤、关节及心脏健康。",
        description: "泵装野生鱼油，适合作为拌食营养补充。高端定位，适合追求高纯度营养的品牌线，提供多种规格定制。",
      }
    }
  ];

  for (const p of products) {
    const existing = await prisma.product.findUnique({
      where: { slug: p.slug }
    });

    if (existing) {
      const currentTranslations = JSON.parse(existing.translations || "{}");
      currentTranslations.zh = p.zh;
      
      await prisma.product.update({
        where: { slug: p.slug },
        data: {
          translations: JSON.stringify(currentTranslations)
        }
      });
      console.log(`Updated translations for: ${p.slug}`);
    } else {
      console.log(`Product not found: ${p.slug}`);
    }
  }

  console.log("Translation update complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
