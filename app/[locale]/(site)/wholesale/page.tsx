import { redirect } from "next/navigation";

export const metadata = { title: "Wholesale Pet Supplements", robots: { index: false, follow: true } };

export default async function WholesaleRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/shop#wholesale`);
}
