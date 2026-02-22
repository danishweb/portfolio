"use client";

import { AboutSection as AboutSectionType } from "@/types";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

interface AboutSectionProps {
  data: AboutSectionType;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);
  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: React.RefObject<HTMLDivElement | null>,
    targetSection: React.RefObject<HTMLDivElement | null>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    // Create animations for each quote
    data.quotes.forEach((quote, index) => {
      if (index > 0) {
        timeline.to(quoteRef.current.querySelector(`.about-${index}`), {
          opacity: 0.2,
          filter: "blur(0px)",
          delay: quote.delay,
        });
      }
      timeline.fromTo(
        quoteRef.current.querySelector(`.about-${index + 1}`),
        { opacity: 0.2, filter: "blur(10px)" },
        { opacity: 1, filter: "blur(0px)" },
        index === 0 ? ">" : "<"
      );
    });

    gsap.registerPlugin(ScrollTrigger);
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <div ref={quoteRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
      {data.quotes.map((quote, index) => (
        <span
          key={index}
          className={`about-${index + 1} leading-tight ${
            willChange ? "will-change-opacity" : ""
          }`}
        >
          {`${quote.text} `}
        </span>
      ))}
    </div>
  );

  return (
    <section
      className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container"
      ref={targetSection}
      style={{
        backgroundColor: data?.sectionStyles?.backgroundColor,
        color: data?.sectionStyles?.textColor,
      }}
    >
      {data.title && (
        <h1 className="section-heading mb-8">{data.title}</h1>
      )}
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;
