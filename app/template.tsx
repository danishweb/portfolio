"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const bannerOne = useRef<HTMLDivElement>(null);
  const bannerTwo = useRef<HTMLDivElement>(null);
  const bannerThree = useRef<HTMLDivElement>(null);
  const bannerFour = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const playAnimation = () => {
    const banners = [
      bannerOne.current,
      bannerTwo.current,
      bannerThree.current,
      bannerFour.current,
    ];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hide content immediately
      tl.set(contentRef.current, {
        opacity: 0,
      })
      // Initially position banners off-screen to the left
      .set(banners, {
        xPercent: -100,
        opacity: 1,
      })
      // Slide them in from left to right
      .to(banners, {
        xPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.1,
      })
      // Slight pause at the end
      .to(banners, {
        xPercent: 100,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.1,
      })
      // Fade in content after banners have moved
      .to(contentRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      }, "-=0.3"); // Start slightly before the banner animation ends
    });

    return ctx;
  };

  useEffect(() => {
    if (!isHomePage) return;
    const ctx = playAnimation();
    return () => ctx.revert();
  }, [pathname, isHomePage]);

  return (
    <div className="relative">
      {/* Banner animations */}
      {isHomePage && (
        <>
          <div
            ref={bannerOne}
            className="w-screen h-1/4 bg-black z-50 fixed top-0 left-0"
          />
          <div
            ref={bannerTwo}
            className="w-screen h-1/4 bg-black z-50 fixed top-1/4 left-0"
          />
          <div
            ref={bannerThree}
            className="w-screen h-1/4 bg-black z-50 fixed top-2/4 left-0"
          />
          <div
            ref={bannerFour}
            className="w-screen h-1/4 bg-black z-50 fixed top-3/4 left-0"
          />
        </>
      )}
      
      {/* Content wrapper */}
      <div ref={contentRef} className="relative">
        {children}
      </div>
    </div>
  );
};

export default Template;
