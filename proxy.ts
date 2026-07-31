import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { LOCALES, DEFAULT_LOCALE, isLocale, pickLocale } from "@/lib/i18n/locales";

const PUBLIC_FILE = /\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|pdf|txt|xml|json|js|css|map|woff2?|mp4|webm|mov|mp3|ogg)$/i;
const LOCALE_COOKIE = "ep_locale";

async function readRole(req: NextRequest): Promise<string | null> {
  const token = req.cookies.get("ep_session")?.value;
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET || "dev-secret");
    const { payload } = await jwtVerify<{ role: string }>(token, secret);
    return payload.role ?? null;
  } catch {
    return null;
  }
}

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 静态资源与内部路径直接放行
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/llms.txt" ||
    pathname === "/llms-full.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 管理后台：中文界面、无 locale 前缀，仅 ADMIN/STAFF 可入
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return NextResponse.next();
    const role = await readRole(req);
    if (role !== "ADMIN" && role !== "STAFF") {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  const seg = pathname.split("/")[1] ?? "";

  // 已带合法 locale：校验账户区登录态后放行
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1) || "/";
    const isAccountArea =
      rest.startsWith("/account") &&
      !rest.startsWith("/account/login") &&
      !rest.startsWith("/account/register");
    if (isAccountArea) {
      const role = await readRole(req);
      if (!role) {
        const url = req.nextUrl.clone();
        url.pathname = `/${seg}/account/login`;
        url.searchParams.set("next", rest);
        return NextResponse.redirect(url);
      }
    }
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, seg, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // 无前缀：按 Cookie → Accept-Language 定位后重定向
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : pickLocale(req.headers.get("accept-language")) || DEFAULT_LOCALE;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

// 供类型引用，避免未使用告警
void LOCALES;
