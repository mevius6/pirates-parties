import { BRAND_NAME_ABBR, CMS_NAME, CMS_URL } from "@/lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BRAND_NAME_ABBR}.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Это наш магазин и платформа для анонса мероприятий, релизов и архив полезных материалов.
      </h4>
    </section>
  );
}
