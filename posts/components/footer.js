import Container from "./container";
import { BRAND_NAME, MAIN_SITE_URL } from "@/lib/constants";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-lime border-t border-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 uppercase text-navy">
            {/* {BRAND_NAME} */}
            {/* <small className="block font-serif pt-5">© 2024</small> */}
            <Logo width={"100%"} />
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/"
              className="mx-3 bg-black text-lime hover:bg-red hover:border-lime hover:text-lime-300 border border-black text-black font-bold uppercase tracking-wide py-3 px-12 lg:px-8 duration-150 transition-colors ease-out hover:ease-in mb-6 lg:mb-0"
            >
              Все статьи
            </a>
            <a
              href={`${MAIN_SITE_URL}`}
              className="mx-3 font-bold tracking-normal hover:underline duration-150 transition-colors ease-out hover:ease-in decoration-red"
            >
              Перейти на основной сайт
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
