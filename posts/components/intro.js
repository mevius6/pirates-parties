import { BRAND_NAME_ABBR } from "@/lib/constants";

export default function Intro() {
  return (
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <section className="flex-col md:flex-row flex items-center md:justify-between">
      <h1 className="text-6xl md:text-8xl font-heavy md:pr-8 leading-tight">
        {BRAND_NAME_ABBR}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-bold">
        Это наш магазин и платформа для анонса мероприятий, релизов и архив полезных материалов.
      </h4>
    </section>
  );
}
