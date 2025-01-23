import Cursor from "@/components/common/cursor";
import ProgressIndicator from "@/components/common/progress-indicator";
import AboutSection from "@/components/home/about";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects";
import SkillsSection from "@/components/home/skills";
import { getAllSections } from "../sanity/lib/actions";

export default async function Home() {
  const data = await getAllSections();

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
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
}
