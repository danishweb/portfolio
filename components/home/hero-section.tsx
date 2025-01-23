"use client";

import { Linear, gsap } from "gsap";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { MENULINKS } from "../../constants";
import Button, { ButtonTypes } from "../common/button";
import { HeroSection as HeroSectionType } from "@/types/index";
import { urlForImage } from "@/sanity/lib/image";

const HERO_STYLES = {
  SECTION:
    "w-full flex items-center justify-center md:items-center section-container min-h-screen relative",
  CONTENT: "font-medium flex flex-col items-center justify-center select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

interface HeroSectionProps {
  data: HeroSectionType;
}

const HeroSection = React.memo(({ data }: HeroSectionProps) => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const scrambledText: MutableRefObject<HTMLHeadingElement> = useRef(null);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .from(
        targetSection.current,
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      )
      .to(targetSection.current, { opacity: 1, duration: 2 });

    return revealTl;
  };

  useEffect(() => {
    initRevealAnimation(targetSection);
  }, [targetSection]);

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="mb-5 lg:mb-10 flex items-center justify-center flex-col gap-5">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-100 overflow-hidden relative">
          {data.profileImage && (
            <Image
              src={urlForImage(data.profileImage)}
              alt="Profile"
              fill
              sizes="(max-width: 768px) 128px, 192px"
              priority
              className="object-cover"
            />
          )}
        </div>
        <h2 className="seq text-2xl">{data.greeting}</h2>
      </div>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl md:max-w-[60%] text-center mb-5 lg:mb-10 font-medium"
        ref={scrambledText}
      >
        <span className="underline-custom">
          {data.mainHeading.highlightedText}
        </span>{" "}
        {data.mainHeading.remainingText}
      </h1>

      <div className="mb-5 lg:mb-10 text-center">
        <p>
          A <strong>{data.introduction.role}</strong> in{" "}
          {data.introduction.company}.
        </p>

        <p>{data.introduction.tagline}</p>
      </div>

      <div className="flex seq">
        {data.ctaButtons?.map((button, index) => (
          <Button
            key={button.text}
            classes={`${index === 0 ? "mr-3" : "ml-3"} uppercase`}
            type={
              button.type === "PRIMARY"
                ? ButtonTypes.PRIMARY
                : ButtonTypes.OUTLINE
            }
            name={button.text}
            href={button.url}
            otherProps={{
              target: button.newTab ? "_blank" : "_self",
              rel: button.newTab ? "noreferrer" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{
        opacity: 0,
        backgroundColor: data.sectionStyles?.backgroundColor,
        color: data.sectionStyles?.textColor,
      }}
    >
      {renderHeroContent()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
