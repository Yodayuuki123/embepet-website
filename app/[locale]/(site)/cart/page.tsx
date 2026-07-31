import { redirect } from "next/navigation";

export const metadata = { title: "Business Inquiry", robots: { index: false } };

export default async function CartRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/private-label#inquiry`);
}
