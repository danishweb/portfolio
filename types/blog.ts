export interface Category {
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export interface Author {
  name: string;
  slug: { current: string };
  image?: any; // Sanity Image object
  bio?: any[]; // PortableText blocks
}

export interface Post {
  title: string;
  slug: { current: string };
  excerpt: string;
  gradient?: [string, string];
  author: Author;
  mainImage: {
    asset?: any;
    alt: string;
    url?: string;
  };
  categories: Category[];
  publishedAt: string;
  featured?: boolean;
  readTime: number;
  body: any[]; // PortableText blocks
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
