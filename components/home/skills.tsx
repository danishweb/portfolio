"use client";

import { urlForImage } from "@/sanity/lib/image";
import { SkillsSection as SkillsSectionT, TechStack } from "@/types";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS } from "../../constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = ({ data }: { data: SkillsSectionT }) => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger | undefined => {
    if (!targetSection.current) return;

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sequenceElements = targetSection.current.querySelectorAll(".seq");

    if (!sequenceElements.length) return;

    revealTl.from(
      sequenceElements,
      { opacity: 1, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const skillsWrapper =
      targetSection.current.querySelector(".skills-wrapper");
    if (!skillsWrapper) return;

    return ScrollTrigger.create({
      trigger: skillsWrapper,
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return () => {
      revealAnimationRef?.kill();
    };
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">{data.title}</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        {data.description}
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    category: string,
    skills: TechStack[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{category}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill.name}
            src={urlForImage(skill.icon)}
            alt={skill.name}
            width={76}
            height={76}
            priority
            className="skill mx-2"
          />
        ))}
      </div>
    </>
  );

  if (!data?.skillCategories?.length) {
    return null;
  }

  // Map categories to match the static structure
  const frontendCategory = data.skillCategories.find((cat) =>
    cat.category.toLowerCase().includes("frontend")
  );
  const backendCategory = data.skillCategories.find((cat) =>
    cat.category.toLowerCase().includes("backend")
  );
  const otherCategories = data.skillCategories.filter(
    (cat) =>
      !cat.category.toLowerCase().includes("frontend") &&
      !cat.category.toLowerCase().includes("backend")
  );

  return (
    <section
      className="relative"
      style={{
        backgroundColor: data.sectionStyles?.backgroundColor,
        color: data.sectionStyles?.textColor,
      }}
    >
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          {frontendCategory && (
            <div className="mt-10">
              {renderSkillColumn(
                frontendCategory.category,
                frontendCategory.skills
              )}
            </div>
          )}
          <div className="flex flex-wrap mt-10">
            {backendCategory && (
              <div className="mr-6 mb-6">
                {renderSkillColumn(
                  backendCategory.category,
                  backendCategory.skills
                )}
              </div>
            )}
            {otherCategories.map((category, index) => (
              <div key={category.category}>
                {renderSkillColumn(category.category, category.skills)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
