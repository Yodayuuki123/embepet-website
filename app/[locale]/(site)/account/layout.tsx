import { redirect } from "next/navigation";

export const metadata = { title: "Business Inquiry", robots: { index: false, follow: true } };

export default async function AccountRedirectLayout({
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/contact`);
}
