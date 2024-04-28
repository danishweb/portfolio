
import { isSmallScreen } from "@/utils/index";
import { IDesktop } from "app/page";
import { Linear, gsap } from "gsap";
import { useEffect, useRef } from "react";

const CURSOR_STYLES = {
  CURSOR:
    "fixed hidden bg-white w-2 h-2 select-none pointer-events-none rounded-full z-50 mix-blend-difference",
  FOLLOWER:
    "fixed hidden h-8 w-8 select-none pointer-events-none z-50 rounded-full -left-3 -top-3 ring-1 ring-black will-change-transform",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1.5,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };

  const initCursorAnimation = () => {
    follower?.current?.classList.remove("hidden");
    cursor?.current?.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {
    console.log(isDesktop && !isSmallScreen());
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div ref={cursor} className={CURSOR_STYLES.CURSOR}></div>
      <div
        ref={follower}
        className={CURSOR_STYLES.FOLLOWER}
      ></div>

      <div className="rounded-t-lg"></div>
    </>
  );
};

export default Cursor;
