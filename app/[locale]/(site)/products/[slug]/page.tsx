import { redirect } from "next/navigation";

export const metadata = { title: "Product Portfolio", robots: { index: false, follow: true } };

export default async function ProductRedirect({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/shop#catalog`);
}
