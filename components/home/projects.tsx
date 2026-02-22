"use client";

import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { MENULINKS } from "../../constants";
import ProjectTile from "../common/project-tile";
import useIsDesktop from "@/utils/hooks/use-is-desktop";
import { ProjectsSection as ProjectsSectionType } from "@/types";

const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-8 justify-center",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

interface ProjectsSectionProps {
  data: ProjectsSectionType;
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const isDesktop = useIsDesktop();
  const targetSectionRef = useRef<HTMLDivElement>(null);
  const sectionTitleElementRef = useRef<HTMLDivElement>(null);

  const [willChange, setWillChange] = useState(false);
  const [horizontalAnimationEnabled, setHorizontalAnimationEnabled] =
    useState(false);

  const initRevealAnimation = (
    targetSectionRef: React.RefObject<HTMLDivElement | null>
  ): [GSAPTimeline, ScrollTrigger] => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSectionRef.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5, display: "none" },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (
    targetSectionRef: React.RefObject<HTMLDivElement | null>,
    sectionTitleElementRef: React.RefObject<HTMLDivElement | null>
  ): [GSAPTimeline, ScrollTrigger] => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetSectionRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
    targetSectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(targetSectionRef.current, { x: width })
      .to(sectionTitleElementRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      onToggle: (self) => setWillChange(self.isActive),
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    let projectsScrollTrigger: ScrollTrigger | undefined;
    let projectsTimeline: GSAPTimeline | undefined;
    let cardScrollTriggers: ScrollTrigger[] = [];

    const { matches } = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );

    setHorizontalAnimationEnabled(isDesktop && matches);

    if (isDesktop && matches) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
        targetSectionRef,
        sectionTitleElementRef
      );

      // Parallax for Desktop containerAnimation
      const projectTiles = targetSectionRef.current.querySelectorAll(".project-wrapper .link");
      projectTiles.forEach((tile) => {
        const st = ScrollTrigger.create({
          trigger: tile,
          containerAnimation: projectsTimeline,
          start: "left right",
          end: "center center",
          scrub: true,
          animation: gsap.fromTo(tile, { scale: 0.8, opacity: 0.4 }, { scale: 1, opacity: 1, ease: "power2.out" })
        });
        cardScrollTriggers.push(st);
      });

    } else {
      const projectWrapper = targetSectionRef.current.querySelector(
        ".project-wrapper"
      ) as HTMLDivElement;
      const parentPadding = window
        .getComputedStyle(targetSectionRef.current)
        .getPropertyValue("padding-left");

      targetSectionRef.current.style.setProperty("width", "100%");
      projectWrapper.classList.add("overflow-x-auto");
      projectWrapper.style.setProperty("width", `calc(100vw)`);
      projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
      projectWrapper.style.setProperty(
        "transform",
        `translateX(-${parentPadding})`
      );

      // Tactile scroll effects for Native Mobile Scroll
      const projectTiles = projectWrapper.querySelectorAll(".link");
      projectTiles.forEach((tile) => {
        const st = ScrollTrigger.create({
          trigger: tile,
          scroller: projectWrapper,
          horizontal: true,
          start: "left right",
          end: "center center",
          scrub: true,
          animation: gsap.fromTo(tile, { scale: 0.85, opacity: 0.5 }, { scale: 1, opacity: 1, ease: "power2.out" })
        });
        cardScrollTriggers.push(st);
      });
    }

    const [revealTimeline, revealScrollTrigger] =
      initRevealAnimation(targetSectionRef);

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
      cardScrollTriggers.forEach((st) => st.kill());
    };
  }, [targetSectionRef, sectionTitleElementRef, isDesktop]);

  const renderSectionTitle = (): React.ReactNode => (
    <div
      className={`flex flex-col inner-container ${
        willChange ? "will-change-transform" : ""
      }`}
      ref={sectionTitleElementRef}
    >
      <p className="section-title-sm seq">{data.subtitle || "PROJECTS"}</p>
      <h1 className="section-heading seq mt-2">{data.title}</h1>
      <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
        {data.description}
      </h2>
    </div>
  );

  const renderProjectTiles = (): React.ReactNode =>
    data.projects.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={horizontalAnimationEnabled}
      />
    ));

  const { ref: projectsSectionRef } = MENULINKS[1];

  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
      style={{
        backgroundColor: data.sectionStyles?.backgroundColor,
        color: data.sectionStyles?.textColor,
      }}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default ProjectsSection;
