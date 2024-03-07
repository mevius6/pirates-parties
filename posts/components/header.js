import { BRAND_NAME_ABBR } from "@/lib/constants";
// import Image from 'next/image';
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl text-red mb-20 mt-8 font-extrabold">
      <Link href="/" className="hover:text-black transition-color duration-150 ease-out hover:ease-in">
        {/* <abbr className="font-displaycaps">{BRAND_NAME_ABBR}</abbr> */}
        {/* <abbr>{BRAND_NAME_ABBR}</abbr> */}
        <Logo width={"160"} />
      </Link>
    </h2>
  );
}
