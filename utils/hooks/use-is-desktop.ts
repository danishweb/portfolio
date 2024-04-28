"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DEBOUNCE_TIME = 100;

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const timer = useRef<NodeJS.Timeout>();

  const debouncedDimensionCalculator = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { 
      const isDesktopResult =
         window.screen.orientation.type.startsWith('landscape') &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setIsDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  }, []);

  useEffect(() => {
    debouncedDimensionCalculator();

    const handleResize = () => debouncedDimensionCalculator();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer.current);
    };
  }, [debouncedDimensionCalculator]);

  return isDesktop;
};

export default useIsDesktop;
