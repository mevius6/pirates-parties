import Container from "./container";
import cn from "classnames";
import { BRAND_NAME, EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-blue text-white": preview,
        "bg-lime border-pink text-blue": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm font-serif uppercase">
          {preview ? (
            <>
              Эта страница в режиме предварительного просмотра.{" "}
              <a
                href="/api/exit-preview"
                className="underline text- hover:text-blue transition-color duration-150 ease-out hover:ease-in"
              >
                Нажмите сюда,
              </a>{" "}
              чтобы выйти из режима предварительного просмотра.
            </>
          ) : (
            <>
              {BRAND_NAME} © 2024
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
