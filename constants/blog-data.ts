import { Post } from "@/types/blog";

export const DUMMY_POSTS: Post[] = [
  {
    title: "Mastering GSAP ScrollTriggers in Next.js",
    slug: { current: "mastering-gsap-scrolltriggers" },
    excerpt: "Learn how to build high-end, responsive animations in modern web applications using GSAP and React.",
    gradient: ["#2d1b4e", "#130927"],
    author: {
      name: "Danish Shaikh",
      slug: { current: "danish-shaikh" },
      image: { url: "/profile-pic.png" }, // Using a generic path to be replaced or handled nicely if missing
    },
    mainImage: {
      alt: "GSAP Animation Example",
      url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop", 
    },
    categories: [
      { title: "Animation", slug: { current: "animation" }, color: "#F7DF1E" },
      { title: "Frontend", slug: { current: "frontend" }, color: "#61DAFB" },
    ],
    publishedAt: "2023-10-15T09:00:00Z",
    readTime: 6,
    featured: true,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "GSAP is a powerful animation library..." }],
      }
    ],
  },
  {
    title: "Building Scalable Architectures with Next.js 14",
    slug: { current: "scalable-architectures-nextjs-14" },
    excerpt: "Discover the best practices for structuring your Next.js applications for enterprise scale using App Router.",
    gradient: ["#0f2027", "#203a43"],
    author: {
      name: "Danish Shaikh",
      slug: { current: "danish-shaikh" },
    },
    mainImage: {
      alt: "Nextjs Architecture",
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    categories: [
      { title: "Architecture", slug: { current: "architecture" }, color: "#9333EA" },
      { title: "React", slug: { current: "react" }, color: "#61DAFB" },
    ],
    publishedAt: "2023-11-02T14:30:00Z",
    readTime: 8,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Scalability is key to modern web dev..." }],
      }
    ],
  },
  {
    title: "The Ultimate Guide to Sanity CMS integration",
    slug: { current: "sanity-cms-integration" },
    excerpt: "A comprehensive walkthrough on hooking up Sanity Studio with your frontend for a seamless editorial experience.",
    gradient: ["#3a1c71", "#d76d77"],
    author: {
      name: "Danish Shaikh",
      slug: { current: "danish-shaikh" },
    },
    mainImage: {
      alt: "Sanity CMS",
      url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    },
    categories: [
      { title: "CMS", slug: { current: "cms" }, color: "#F03E2F" },
      { title: "Backend", slug: { current: "backend" }, color: "#4CAF50" },
    ],
    publishedAt: "2023-12-10T11:15:00Z",
    readTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Managing content effectively requires a solid CMS..." }],
      }
    ],
  },
  {
    title: "Designing for Accessibility: A Practical Approach",
    slug: { current: "designing-for-accessibility" },
    excerpt: "Why web accessibility matters and how you can implement ARIA patterns and keyboard support effortlessly.",
    gradient: ["#1e3c72", "#2a5298"],
    author: {
      name: "Danish Shaikh",
      slug: { current: "danish-shaikh" },
    },
    mainImage: {
      alt: "Accessibility",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    categories: [
      { title: "Design", slug: { current: "design" }, color: "#EC4899" },
      { title: "UX", slug: { current: "ux" }, color: "#F59E0B" },
    ],
    publishedAt: "2024-01-05T08:45:00Z",
    readTime: 7,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Accessibility is not a feature, it's a requirement..." }],
      }
    ],
  },
];
