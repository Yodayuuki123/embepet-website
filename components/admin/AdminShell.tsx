"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquareQuote,
  FileText,
  Star,
  TicketPercent,
  Mail,
  Settings,
  Search,
  PawPrint,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { logoutAdmin } from "@/lib/actions/auth";

const navItems = [
  { href: "/admin", label: "仪表盘", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "产品管理", icon: Package },
  { href: "/admin/orders", label: "订单管理", icon: ShoppingCart },
  { href: "/admin/inquiries", label: "B2B 询盘", icon: MessageSquareQuote },
  { href: "/admin/posts", label: "博客内容", icon: FileText },
  { href: "/admin/reviews", label: "评价审核", icon: Star },
  { href: "/admin/coupons", label: "优惠券", icon: TicketPercent },
  { href: "/admin/subscribers", label: "订阅名单", icon: Mail },
  { href: "/admin/seo", label: "SEO 工具", icon: Search },
  { href: "/admin/settings", label: "站点设置", icon: Settings },
];

export default function AdminShell({ userName, children }: { userName: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-black/8 bg-white">
        <div className="flex h-16 items-center gap-2.5 border-b border-black/8 px-5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1d3f2f] text-white">
            <PawPrint size={17} />
          </span>
          <div className="leading-tight">
            <p className="text-[0.95rem] font-bold tracking-wide">EMBEPET</p>
            <p className="text-[0.7rem] text-black/45">管理后台</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-0.5 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] transition-colors ${
                  active ? "bg-[#1d3f2f] font-medium text-white" : "text-black/70 hover:bg-black/5"
                }`}
              >
                <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-black/8 p-3">
          <a
            href="/en"
            target="_blank"
            className="mb-0.5 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] text-black/70 transition-colors hover:bg-black/5"
          >
            <ExternalLink size={17} strokeWidth={1.8} />
            查看前台站点
          </a>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] text-black/70 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={17} strokeWidth={1.8} />
              退出（{userName}）
            </button>
          </form>
        </div>
      </aside>

      {/* 主内容 */}
      <div className="ml-60 flex-1">
        <main className="mx-auto max-w-6xl px-8 py-8">{children}</main>
      </div>
    </div>
  );
}
