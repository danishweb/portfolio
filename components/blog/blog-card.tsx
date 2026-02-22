import { Post } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTheme } from "@/app/providers/theme-provider";

interface BlogCardProps {
  post: Post;
  className?: string; // allow passing custom widths
}

const BlogCard = ({ post, className = "w-full min-h-[400px]" }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { settings } = useTheme();
  
  const { title, slug, excerpt, mainImage, categories, readTime, publishedAt, gradient } = post as Post & { gradient?: [string, string] };
  
  const projectBgUrl =
    settings?.decorativeAssets?.projectTileBackground?.asset?.url ||
    "/project-bg.svg";

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Default to a dark sleek gradient if none provided
  const [stop1, stop2] = gradient || [
    "var(--color-primary)",
    "#111111",
  ];

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        gyroscope: false,
      });
    }
  }, [cardRef]);

  const renderTopBottomGradient = (): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-32 z-10 rounded-3xl"
        style={{
          background: `linear-gradient(180deg, ${stop1} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-48 z-10 rounded-3xl"
        style={{
          background: `linear-gradient(0deg, ${stop2} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  return (
    <Link href={`/blog/${slug.current}`} className={`block h-full group ${className}`}>
      <div 
        ref={cardRef}
        className="relative flex flex-col justify-end p-6 h-full w-full overflow-hidden rounded-3xl cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${stop1} 0%, ${stop2} 100%)`,
          transformStyle: "preserve-3d", // Crucial for inner 3D depth
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* SVG Texture Overlay */}
        <Image
          src={projectBgUrl}
          alt="Texture"
          fill
          className="absolute w-full h-full top-0 left-0 opacity-10 z-0 object-cover pointer-events-none"
        />

        {/* Hero Image (Darkened) */}
        {mainImage?.url && (
          <div className="absolute inset-0 z-0">
             <Image
              src={mainImage.url}
              alt={mainImage.alt || title}
              fill
              className="object-cover opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Gradient fades for text legibility */}
        {renderTopBottomGradient()}

        {/* Top Category Tags - Pop out in 3D */}
        <div 
          className="absolute top-6 left-6 flex flex-wrap gap-2 z-20"
          style={{ transform: "translateZ(1.5rem)" }}
        >
          {categories?.map((cat) => (
            <span 
              key={cat.slug.current} 
              className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md border border-white/10"
              style={{ 
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#e2e8f0",
                boxShadow: `0 0 15px ${cat.color}40`,
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cat.color }}></span>
              {cat.title}
            </span>
          ))}
        </div>

        {/* Main Content Area - Pop out in 3D */}
        <div 
          className="relative z-20 flex flex-col mt-auto pb-2"
          style={{ transform: "translateZ(3rem)" }}
        >
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest mb-3 opacity-70" style={{ color: "#e2e8f0" }}>
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-white opacity-50"></span>
            <span>{readTime} min read</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 line-clamp-2 text-white drop-shadow-lg leading-tight">
            {title}
          </h2>
          
          <p className="text-sm line-clamp-2 mb-6 font-medium text-white opacity-80 drop-shadow-md">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
            <span className="group-hover:text-blue-400 transition-colors duration-300">Read Article</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
