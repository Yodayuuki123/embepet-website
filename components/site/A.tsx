"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { useLocale } from "./LocaleProvider";

type Props = ComponentProps<typeof Link>;

/**
 * 本地化 Link：站内路径自动补 /{locale} 前缀。
 * 外链、锚点、已带 locale 前缀的路径原样放行。
 */
const A = forwardRef<HTMLAnchorElement, Props>(function A({ href, ...rest }, ref) {
  const locale = useLocale();
  let out = href;
  if (
    typeof href === "string" &&
    href.startsWith("/") &&
    !href.startsWith("/admin") &&
    !href.startsWith("/api") &&
    !href.startsWith(`/${locale}/`) &&
    href !== `/${locale}`
  ) {
    out = href === "/" ? `/${locale}` : `/${locale}${href}`;
  }
  return <Link ref={ref} href={out} {...rest} />;
});

export default A;
