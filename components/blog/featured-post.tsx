"use client";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/blog";
import { useMemo } from "react";

const FeaturedPost = ({ post }: { post: Post }) => {
  const formattedDate = useMemo(() => {
    return new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }, [post.publishedAt]);

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <article className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 md:order-none">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.categories?.[0]?.title || "Uncategorized"}
              </span>
              <span className="text-sm text-gray-500">{post.readTime} min read</span>
            </div>
            <Link
              href={`/blog/${post.slug.current}`}
              className="block group-hover:text-black transition-colors"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {post.author.image?.url ? (
                    <Image
                      src={post.author.image.url}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 font-bold">{post.author.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium text-base md:text-lg text-black">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formattedDate}
                  </div>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug.current}`}
                className="inline-flex items-center gap-2 text-base font-medium text-black hover:text-gray-600 transition-colors group/link"
              >
                Read Article
                <svg
                  className="w-5 h-5 transition-transform group-hover/link:translate-x-1"
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
              </Link>
            </div>
          </div>
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden order-1 md:order-none shadow-lg transition-transform group-hover:scale-[1.02] bg-gray-100">
            {post.mainImage?.url ? (
              <Image
                src={post.mainImage.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
