import { BRAND_NAME_ABBR } from "@/lib/constants";
// import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-display text-pink leading-tight mb-20 mt-8">
      <Link href="/" className="hover:text-black transition-color duration-150 ease-out hover:ease-in">
        {/* <img src="/acronym.svg" /> */}
        {/* <Image
          src="/abbr.svg"
          width={128}
          height={128}
        /> */}
        <abbr className="font-displaycaps">{BRAND_NAME_ABBR}</abbr>
      </Link>
    </h2>
  );
}
