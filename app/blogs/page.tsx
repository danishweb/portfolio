import Link from "next/link";
import BlogPost from "./_components/blog-post";
import Categories from "./_components/categories";
import FeaturedPost from "./_components/featured-post";

// Dummy data
const featuredPost = {
  id: "featured-1",
  title: "Building Modern Web Applications with Next.js and GSAP",
  excerpt:
    "Learn how to create stunning web experiences by combining the power of Next.js and GSAP animations. This comprehensive guide covers everything from setup to advanced techniques.",
  category: "Development",
  readTime: "8 min read",
  date: "2024-02-12",
  author: {
    name: "Danish Siddiqui",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  thumbnail: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
};

const blogPosts = [
  {
    id: "1",
    title: "The Evolution of Frontend Development",
    excerpt:
      "Exploring the latest trends and best practices in modern frontend development.",
    category: "Development",
    readTime: "5 min read",
    date: "2024-02-10",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    title: "Mastering Animation with GSAP",
    excerpt:
      "Deep dive into creating smooth and engaging animations using GSAP.",
    category: "Design",
    readTime: "6 min read",
    date: "2024-02-08",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    title: "Building Scalable Applications",
    excerpt:
      "Learn the architecture patterns for building maintainable applications.",
    category: "Architecture",
    readTime: "7 min read",
    date: "2024-02-06",
    thumbnail: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "4",
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming technologies and trends in web development.",
    category: "Technology",
    readTime: "5 min read",
    date: "2024-02-04",
    thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const categories = [
  "All",
  "Development",
  "Design",
  "Architecture",
  "Technology",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <header className="pt-10 md:pt-28 pb-2 md:pb-12 px-4 bg-gradient-to-b from-gray-50 to-white">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Blog & Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
            Exploring the intersections of design, development, and technology.
          </p>

          {/* Categories */}
          <Categories categories={categories} />
        </div>
      </header>

      {/* Featured Post */}
      <FeaturedPost post={featuredPost} />

      {/* Blog Posts Grid */}
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
