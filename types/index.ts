import { Image, PortableTextBlock } from "sanity";

// Hero Section Types
export interface HeroSection {
  _type: "heroSection";
  greeting: string;
  profileImage: Image;
  mainHeading: {
    highlightedText: string;
    remainingText: string;
  };
  introduction: {
    role: string;
    company: string;
    tagline: string;
  };
  ctaButtons: {
    text: string;
    url: string;
    type: "PRIMARY" | "OUTLINE";
    newTab: boolean;
  }[];
  sectionStyles?: {
    backgroundColor: string;
    textColor: string;
  };
}

// About Section Types
export interface Quote {
  text: string;
  delay: number;
}

export interface AboutSection {
  _type: "aboutSection";
  quotes: Quote[];
  sectionStyles?: {
    backgroundColor: string;
    textColor: string;
  };
}

// Tech Stack Types
export interface TechStack {
  name: string;
  slug: string;
  icon: Image;
}

// Skills Section Types
export interface SkillCategory {
  category: string;
  skills: TechStack[];
}

export interface SkillsSection {
  _type: "skillsSection";
  title: string;
  subtitle?: string;
  description: string;
  skillCategories: SkillCategory[];
  sectionStyles?: {
    backgroundColor: string;
    textColor: string;
  };
}

// Projects Section Types
export interface Project {
  name: string;
  description: string;
  image: Image;
  gradient: [string, string];
  url?: string;
  tech: TechStack[];
}

export interface ProjectsSection {
  _type: "projectsSection";
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
  sectionStyles?: {
    backgroundColor: string;
    textColor: string;
  };
}

// Footer Section Types
export interface SocialLink {
  platform: string;
  url: string;
  icon: {
    asset: {
      url: string;
    };
  };
}

export interface CTAButton {
  text: string;
  url: string;
  type: "PRIMARY" | "OUTLINE" | "WHITE";
  newTab: boolean;
}

export interface FooterSection {
  _type: "footerSection";
  copyright: string;
  socialLinks: SocialLink[];
  contactEmail?: string;
  ctaButtons: CTAButton[];
}

// Combined Platform Data Type
export interface PlatformData {
  hero: HeroSection;
  about: AboutSection;
  projects: ProjectsSection;
  skills: SkillsSection;
  footer: FooterSection;
}
