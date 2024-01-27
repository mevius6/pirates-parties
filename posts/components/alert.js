import Container from "./container";
import cn from "classnames";
import { BRAND_NAME, EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-navy border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm text-lime font-display uppercase tracking-wide">
          {preview ? (
            <>
              Эта страница в режиме предварительного просмотра.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-blue duration-150 transition-colors"
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
