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
  brandTagline: "Pet supplement manufacturing for global brands",
  companyLegalName: "Embepet Biotech (Shenzhen) Co., Ltd.",
  supportEmail: "care@embepet.com",
  b2bEmail: "b2b@embepet.com",
  phone: "+86 178-1827-6837",
  announcement: "Established 2016 · GMP audit recognition · SQF certified · OEM / ODM",
  instagram: "https://instagram.com/embepet",
  facebook: "https://facebook.com/embepet",
  tiktok: "https://tiktok.com/@embepet",
  youtube: "https://youtube.com/@embepet",
  freeShippingThresholdCents: 4900,
  flatShippingCents: 599,
  seoDefaultTitle: "Pet Supplement Manufacturer & OEM/ODM Partner | EMBEPET",
  seoDefaultDescription:
    "Taizhou Beno Biotech manufactures wholesale, private-label and custom pet supplements across soft chews, powders, liquids, oils, tablets and pastes.",
};

export const getSettings = cache(async (): Promise<SiteSettings> => {
  const rows = await db.siteSetting.findMany();
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  // 兼容旧键名
  if (map.tagline && !map.brandTagline) map.brandTagline = map.tagline;
  if (map.contactEmail && !map.supportEmail) map.supportEmail = map.contactEmail;
  if (map.whatsapp && !map.phone) map.phone = map.whatsapp;
  if (map.legalName && !map.companyLegalName) map.companyLegalName = map.legalName;
  if (map.phone?.replace(/\D/g, "") === "8613800000000") map.phone = DEFAULTS.phone;
  if (map.announcement?.includes("Free US shipping")) map.announcement = DEFAULTS.announcement;
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
