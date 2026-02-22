import { client } from "./client";
import {
  heroSectionQuery,
  aboutSectionQuery,
  projectsSectionQuery,
  skillsSectionQuery,
  footerSectionQuery,
  allSectionsQuery,
  siteSettingsQuery,
} from "./queries";
import type {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  FooterSection,
  PlatformData,
  SiteSettings,
} from "@/types/index";

// Individual section fetchers
export async function getHeroSection(): Promise<HeroSection> {
  return await client.fetch(heroSectionQuery);
}

export async function getAboutSection(): Promise<AboutSection> {
  return await client.fetch(aboutSectionQuery);
}

export async function getProjectsSection(): Promise<ProjectsSection> {
  return await client.fetch(projectsSectionQuery);
}

export async function getSkillsSection(): Promise<SkillsSection> {
  return await client.fetch(skillsSectionQuery);
}

export async function getFooterSection(): Promise<FooterSection> {
  return await client.fetch(footerSectionQuery);
}

// Fetch all sections at once
export async function getAllSections(): Promise<PlatformData> {
  return await client.fetch(allSectionsQuery);
}

// Example usage of revalidation with Next.js
export async function getAllSectionsWithRevalidate(
  revalidate: number = 3600
): Promise<PlatformData> {
  return await client.fetch(allSectionsQuery, {}, { next: { revalidate } });
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await client.fetch(siteSettingsQuery);
}

export async function getSiteSettingsWithRevalidate(
  revalidate: number = 3600
): Promise<SiteSettings | null> {
  return await client.fetch(siteSettingsQuery, {}, { next: { revalidate } });
}
