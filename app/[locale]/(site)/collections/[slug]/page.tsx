import { redirect } from "next/navigation";

export const metadata = { title: "Product Portfolio", robots: { index: false } };

export default async function CollectionRedirectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/shop`);
}
