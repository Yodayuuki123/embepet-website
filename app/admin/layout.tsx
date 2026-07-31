import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "../globals.css";
import { getSession } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: { default: "EMBEPET 管理后台", template: "%s · EMBEPET 后台" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const authed = !!session && (session.role === "ADMIN" || session.role === "STAFF");

  return (
    <html lang="zh-CN">
      <body className="bg-[#f4f4f1] text-[#1c1c1a] antialiased">
        {authed ? <AdminShell userName={session!.name}>{children}</AdminShell> : children}
      </body>
    </html>
  );
}
