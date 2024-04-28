export const METADATA = {
  title: "Portfolio | Danish Shaikh",
  description:
    "I am a passionate Software Engineer who bridges the gap between development and design.I take responsibility to craft a good web app using modern architecture.",
  siteUrl: "https://danishshaikh.vercel.app",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const EMAIL = "danishshaikh5121@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/danish-shaikh-0a9725207",
  github: "https://github.com/danishweb",
  medium: "https://medium.com/@danish512",
  instagram: "https://www.instagram.com/danish512s/",
  twitter: "https://twitter.com/danish512s",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "SkillForce (LMS)",
    image: "/projects/skillforge.png",
    blurImage: "/projects/skillforge.png",
    description: "Build ",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://master.dem95b5y4k8tu.amplifyapp.com/",
    tech: ["typescript", "next", "tailwind", "aws"],
  },
  {
    name: "ConnectAi",
    image: "/projects/connectai.png",
    blurImage: "/projects/connectai.png",
    description:
      "Healthcare webapp for AsIndia, built the application from zero to production 🚀",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.connectai.care/",
    tech: ["react", "nodejs", "javascript", "mongodb"],
  },
  {
    name: "Your Scrap Buddy",
    image: "/projects/yourscrapbuddy.png",
    blurImage: "/projects/yourscrapbuddy.png",
    description: "Marketing site for local scrap business.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.yourscrapbuddy.com/",
    tech: ["figma", "react", "tailwind"],
  },
  {
    name: "ZODIX",
    image: "/projects/zodix.png",
    blurImage: "/projects/zodix.png",
    description: "Built the application from zero to production 🚀",
    gradient: ["#060083", "#060083"],
    url: "https://www.zodix.net",
    tech: ["react", "nodejs", "typescript", "mssqlserver"],
  },
  {
    name: "C2C server-less micro-service backend",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#552A04", "#614023"],
    url: "https://github.com/danishweb/c2c-serverless",
    tech: ["nodejs", "aws", "serverless"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "typescript",
    "aws",
    "tailwind",
    "nodejs",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack"],
};
