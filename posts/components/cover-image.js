import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Обложка публикации: ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200 ease-in": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
