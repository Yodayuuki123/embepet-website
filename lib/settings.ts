import "server-only";
import { cache } from "react";
import { db } from "./db";

export type SiteSettings = {
  brandName: string;
  brandNameCn: string;
  brandTagline: string;
  companyLegalName: string;
  supportEmail: string;
  b2bEmail: string;
  phone: string;
  announcement: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  youtube: string;
  freeShippingThresholdCents: number;
  flatShippingCents: number;
  seoDefaultTitle: string;
  seoDefaultDescription: string;
};

const DEFAULTS: SiteSettings = {
  brandName: "EMBEPET",
  brandNameCn: "恩贝宠",
  brandTagline: "Science-first supplements for dogs & cats",
  companyLegalName: "Embepet Biotech (Shenzhen) Co., Ltd.",
  supportEmail: "care@embepet.com",
  b2bEmail: "b2b@embepet.com",
  phone: "+86 178-1827-6837",
  announcement: "10+ Years · Zero Safety Incidents · cGMP & SQF & HACCP · Ships to 150+ Countries",
  instagram: "https://instagram.com/embepet",
  facebook: "https://facebook.com/embepet",
  tiktok: "https://tiktok.com/@embepet",
  youtube: "https://youtube.com/@embepet",
  freeShippingThresholdCents: 4900,
  flatShippingCents: 599,
  seoDefaultTitle: "EMBEPET — Science-First Pet Supplements | OEM/ODM Factory, 10+ Years",
  seoDefaultDescription:
    "Vet-informed soft chews, oils and powders for dogs and cats. cGMP & SQF & HACCP certified facility, 10+ years zero-incident manufacturing, MOQ 500 units, ships to 150+ countries.",
};

export const getSettings = cache(async (): Promise<SiteSettings> => {
  const rows = await db.siteSetting.findMany();
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  // 兼容旧键名
  if (map.tagline && !map.brandTagline) map.brandTagline = map.tagline;
  if (map.contactEmail && !map.supportEmail) map.supportEmail = map.contactEmail;
  if (map.whatsapp && !map.phone) map.phone = map.whatsapp;
  if (map.legalName && !map.companyLegalName) map.companyLegalName = map.legalName;
  return {
    ...DEFAULTS,
    ...map,
    freeShippingThresholdCents: map.freeShippingThresholdCents
      ? parseInt(map.freeShippingThresholdCents, 10)
      : DEFAULTS.freeShippingThresholdCents,
    flatShippingCents: map.flatShippingCents
      ? parseInt(map.flatShippingCents, 10)
      : DEFAULTS.flatShippingCents,
  } as SiteSettings;
});
