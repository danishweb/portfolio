import Cursor from "@/components/common/cursor";
import ProgressIndicator from "@/components/common/progress-indicator";
import AboutSection from "@/components/home/about";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects";
import SkillsSection from "@/components/home/skills";
import React from "react";
import { getAllSectionsWithRevalidate } from "../sanity/lib/actions";

export const revalidate = 10; // revalidate this page every 10 seconds

export default async function Home() {
  const data = await getAllSectionsWithRevalidate(10);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[#f1f1f1] -z-50" />
  );

  return (
    <div>
      <ProgressIndicator />
      <Cursor /> 
      <main className="flex-col flex">
        {renderBackdrop()}
        <HeroSection data={data.hero} />
        <AboutSection data={data.about} />
        <ProjectsSection data={data.projects} />
        <SkillsSection data={data.skills} />
        <Footer data={data.footer} />
      </main>
    </div>
  );
}
