import { BRAND_NAME_ABBR } from "@/lib/constants";
// import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl text-red mb-20 mt-8">
      <Link href="/" className="hover:text-black transition-color duration-150 ease-out hover:ease-in">
        {/* <abbr className="font-displaycaps">{BRAND_NAME_ABBR}</abbr> */}
        <abbr>{BRAND_NAME_ABBR}</abbr>
      </Link>
    </h2>
  );
}
