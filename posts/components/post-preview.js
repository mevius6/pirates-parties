import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="text-3xl mb-4">
        <Link href={`/posts/${slug}`} className="hover:text-brown transition-color duration-150 ease-out hover:ease-in;">
          {title}
        </Link>
      </h3>
      <div className="inline-flex text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-normal mb-5">{excerpt}</p>
      <div className="flex items-center">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
