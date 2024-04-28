"use client";

import React, { useEffect, useState } from "react";

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setProgress(scrolled);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(prefers-reduced-motion: no-preference)");

    matches && window.addEventListener("scroll", calculateProgress);

    return () => window.removeEventListener("scroll", calculateProgress);
  }, [progress]);

  return (
    <div className="h-[0.1875rem] w-full fixed top-0 z-50">
      <div
        className="progress-bar h-1 origin-left will-change-transform w-full bg-black"
        style={{ transform: `scaleX(${progress})` }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
