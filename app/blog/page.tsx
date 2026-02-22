"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BlogPost from "@/components/blog/blog-post";
import FeaturedPost from "@/components/blog/featured-post";
import { DUMMY_POSTS } from "@/constants/blog-data";
import { Post } from "@/types/blog";
import Cursor from "@/components/common/cursor";
import ProgressIndicator from "@/components/common/progress-indicator";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from dummy data
  const categories = useMemo(() => {
    const cats = new Set<string>();
    DUMMY_POSTS.forEach((post) => {
      post.categories?.forEach((cat) => {
        cats.add(cat.title);
      });
    });
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return DUMMY_POSTS;
    return DUMMY_POSTS.filter((post) =>
      post.categories?.some((cat) => cat.title === activeCategory)
    );
  }, [activeCategory]);

  // Set the first post as the featured post, remainder in the grid
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-white text-black relative">
      <ProgressIndicator />
      <Cursor />
      
      {/* Header Section */}
      <header className="pt-32 pb-8 md:pb-12 px-4 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6 group hover:underline"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            Blog & Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-medium">
            Exploring the intersections of design, development, and technology.
          </p>

          {/* Re-implementing the Categories here temporarily if the imported component doesn't support state lifting easily */}
          <div className="relative mt-8 md:mt-12 overflow-x-auto scrollbar-hide">
             <div className="flex gap-2 md:gap-3 px-1 pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 shadow-sm ${
                      activeCategory === category
                        ? "bg-black text-white transform scale-105"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <FeaturedPost post={featuredPost} />
      )}

      {/* Blog Posts Grid */}
      {gridPosts.length > 0 && (
        <section className="py-12 md:py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {gridPosts.map((post) => (
                <BlogPost key={post.slug.current} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {!featuredPost && gridPosts.length === 0 && (
        <section className="py-24 px-4 bg-gray-50 flex items-center justify-center">
            <p className="text-gray-500 font-medium text-lg">No posts found for "{activeCategory}".</p>
        </section>
      )}
    </div>
  );
}
