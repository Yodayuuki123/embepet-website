import NextLink from "next/link";
import Image from "next/image";

export default function Logo({ brandName, light = false }: { brandName: string; light?: boolean }) {
  return (
    <NextLink
      href="/"
      className="group inline-flex items-center"
      aria-label={`${brandName} home`}
    >
      <Image
        src="/images/beno-bio-logo.png"
        alt="Beno·Bio"
        width={140}
        height={56}
        className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
        priority
      />
    </NextLink>
  );
}
