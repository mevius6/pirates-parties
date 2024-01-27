import Container from "./container";
import cn from "classnames";
import { BRAND_NAME } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-navy border-blue text-white": preview,
        "bg-lime border-pink text-navy": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm font-serif uppercase">
          {preview ? (
            <>
              Эта страница в режиме предварительного просмотра.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-blue transition-color duration-150 ease-out hover:ease-in"
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
