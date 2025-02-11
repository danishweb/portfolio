import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  thumbnail: string;
}

const BlogPost = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-black/10 hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">
              {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-black transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
            <time className="text-sm text-gray-500">{post.date}</time>
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
