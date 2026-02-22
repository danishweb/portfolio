import { DUMMY_POSTS } from "@/constants/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cursor from "@/components/common/cursor";
import ProgressIndicator from "@/components/common/progress-indicator";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DUMMY_POSTS.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  // In Next.js 15+ App Router, `params` is a Promise that must be awaited
  const { slug } = await params;
  
  const post = DUMMY_POSTS.find((p) => p.slug.current === slug);

  if (!post) {
    notFound();
  }

  const { title, mainImage, categories, author, publishedAt, readTime, body } = post;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const [stop1, stop2] = post.gradient || [
    "var(--color-primary)",
    "var(--color-primary)",
  ];

  return (
    <main className="min-h-screen relative pb-32" style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
      <ProgressIndicator />
      <Cursor />

      {/* Immersive Hero Header */}
      <div 
        className="w-full relative flex items-center justify-center pt-32 pb-24 overflow-hidden rounded-b-[3rem] mb-16 shadow-2xl"
        style={{
           background: `linear-gradient(135deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-30"
            style={{ backgroundImage: 'url(/project-bg.svg)' }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {categories?.map((cat) => (
              <span 
                key={cat.slug.current} 
                className="px-4 py-1.5 text-sm font-semibold rounded-full backdrop-blur-md border border-white/20 shadow-xl"
                style={{ 
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  boxShadow: `0 0 20px ${cat.color}50`,
                }}
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: cat.color }}></span>
                {cat.title}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-center text-white drop-shadow-2xl leading-tight max-w-5xl">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-5 text-sm text-white/90 font-medium bg-black/30 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-inner">
            <div className="flex items-center gap-3">
              {author.image?.url ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                  <Image src={author.image.url} alt={author.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500/50 text-blue-400 font-bold text-sm shadow-lg">
                  {author.name.charAt(0)}
                </div>
              )}
              <span className="text-base tracking-wide">{author.name}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            <time className="tracking-wide" dateTime={publishedAt}>{formattedDate}</time>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            <span className="tracking-wide text-blue-300">{readTime} min read</span>
          </div>

        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Featured Image (Now sitting below immersive header) */}
        {mainImage?.url && (
          <div className="relative w-full h-[30vh] md:h-[50vh] rounded-3xl overflow-hidden mb-20 shadow-2xl border" style={{ borderColor: "var(--color-secondary)" }}>
            <Image
              src={mainImage.url}
              alt={mainImage.alt || title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ padding: "0" }}
            />
          </div>
        )}

        {/* Post Content */}
        {/* We will render simple text since dummy blocks are very barebones right now */}
        <div className="prose prose-lg max-w-none" style={{ color: "var(--color-text-muted)" }}>
          <p className="lead text-xl mb-8 font-medium font-medium">
            {post.excerpt}
          </p>
          
          {body?.map((block: any, i: number) => {
            if (block._type === "block" && block.style === "normal") {
              return (
                <p key={i} className="mb-6 leading-relaxed">
                  {block.children?.map((child: any) => child.text).join("")}
                </p>
              );
            }
            return null;
          })}

          <div className="mt-12 p-8 rounded-2xl border" style={{ backgroundColor: "var(--color-secondary)", borderColor: "var(--color-text-muted)" }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--color-text)" }}>Note on Content</h3>
            <p className="m-0" style={{ color: "var(--color-text-muted)" }}>
              This is currently dummy data mapped to the Sanity schemas. Once the Sanity connection is wired up to the frontend, this section will use the <code className="px-2 py-0.5 rounded opacity-80" style={{ backgroundColor: "var(--color-text)", color: "var(--color-primary)" }}>PortableText</code> component to render rich text blocks natively.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t" style={{ borderColor: "var(--color-secondary)" }}>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 transition-colors font-medium opacity-80 hover:opacity-100"
            style={{ color: "var(--color-text)" }}
          >
            <span className="text-xl">←</span> Back to all articles
          </Link>
        </div>

      </article>
    </main>
  );
}
