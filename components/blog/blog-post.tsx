import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/blog";
import { useMemo } from "react";

const BlogPost = ({ post }: { post: Post }) => {
  const formattedDate = useMemo(() => {
    return new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }, [post.publishedAt]);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-black/10 hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug.current}`} className="block flex flex-col h-full">
        <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 shrink-0">
          {post.mainImage?.url ? (
            <Image
              src={post.mainImage.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.categories?.[0]?.title || "Uncategorized"}
            </span>
            <span className="text-sm text-gray-500">
              {post.readTime} min read
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-black transition-colors text-black">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
            <time className="text-sm text-gray-500">{formattedDate}</time>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
              Read Article
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
