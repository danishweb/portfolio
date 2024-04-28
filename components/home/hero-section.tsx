import { Linear, gsap } from "gsap";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { MENULINKS } from "../../constants";
import Button, { ButtonTypes } from "../common/button";

const HERO_STYLES = {
  SECTION:
    "w-full flex items-center justify-center md:items-center section-container min-h-screen relative",
  CONTENT: "font-medium flex flex-col items-center justify-center select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
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
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-100 overflow-auto relative">
          <Image
            src={`/bitmoji.png`}
            alt={"avatar"}
            objectFit="contain"
            fill
            className="w-full h-full absolute"
          />
        </div>
        <h2 className="seq text-2xl">Hi, I&apos;m Danish 🤘</h2>
      </div>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl md:max-w-[60%] text-center mb-5 lg:mb-10 font-medium"
        ref={scrambledText}
      >
        <span className="underline-custom">Building</span> digital products,
        brands, and experience.
      </h1>

      <div className="mb-5 lg:mb-10 text-center">
        <p>
          A <strong>Software Developer</strong> in AsIndia Innovations.
        </p>

        <p>I specialize in pixels to code and everything in between 😉.</p>
      </div>

      <div className="flex seq">
        <Button
          classes="mr-3 uppercase"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/DanishCV .pdf"
        ></Button>
        <Button
          classes="ml-3 uppercase"
          type={ButtonTypes.PRIMARY}
          name="Let's Talk"
          href="mailto:danishshaikh5121@gmail.com"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
