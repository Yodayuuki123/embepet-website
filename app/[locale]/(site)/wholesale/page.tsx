import { redirect } from "next/navigation";

export default async function WholesaleRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/shop#wholesale`);
}
