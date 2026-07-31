import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale } from "@/lib/i18n/locales";

/**
 * 兜底路由：查 301 重定向表（后台可配置），命中则跳转，否则 404。
 * 重定向表存 locale 无关路径，跳转时带上当前 locale。
 */
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale, rest } = await params;
  if (!isLocale(locale)) notFound();

  const path = `/${rest.join("/")}`;
  const rule = await db.redirect.findUnique({ where: { fromPath: path } });
  if (rule) {
    redirect(`/${locale}${rule.toPath}`);
  }
  notFound();
}
