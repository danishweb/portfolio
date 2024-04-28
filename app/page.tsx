"use client";

import Cursor from "@/components/common/cursor";
import ProgressIndicator from "@/components/common/progress-indicator";
import AboutSection from "@/components/home/about";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects";
import useIsDesktop from "@/utils/hooks/use-is-desktop";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  const isDesktop = useIsDesktop();

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[#f1f1f1] -z-50" />
  );

  return (
    <div>
      <ProgressIndicator />
      <Cursor isDesktop={isDesktop} />
      <main className="flex-col flex">
        {renderBackdrop()}
        <HeroSection />
        <AboutSection />
        <ProjectsSection isDesktop={isDesktop} />
        <Footer />
      </main>
    </div>
  );
}
