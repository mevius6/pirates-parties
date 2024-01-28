import Container from "./container";
import { BRAND_NAME, MAIN_SITE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-lime border-t border-teal">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-serif tracking-tight leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 uppercase text-navy">
            {BRAND_NAME}
            {/* <span className="block">Пираты</span>
            <span className="block">Каспийского</span>
            <span className="block">моря</span> */}
            <small className="block font-serif pt-5">© 2024</small>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/"
              className="mx-3 bg-white hover:bg-teal hover:text-lime-300 border border-teal text-black font-black lowercase italic tracking-wide py-3 px-12 lg:px-8 duration-150 transition-colors ease-out hover:ease-in mb-6 lg:mb-0"
            >
              Главная
            </a>
            <a
              href={`${MAIN_SITE_URL}`}
              className="mx-3 font-bold hover:text-teal"
            >
              Перейти на основной сайт
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
