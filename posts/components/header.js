import { BRAND_NAME_ABBR } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Блог {BRAND_NAME_ABBR}
      </Link>
      .
    </h2>
  );
}
