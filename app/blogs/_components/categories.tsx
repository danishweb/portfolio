"use client";
import { useEffect, useRef, useState } from "react";

const Categories = ({ categories }: { categories: string[] }) => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (categoriesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        categoriesRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      categoriesRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-8 md:mt-12">
      <div
        className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-4"
        ref={categoriesRef}
        onScroll={() => {
          if (categoriesRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
              categoriesRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
          }
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="md:hidden">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full"
            aria-label="Scroll categories left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full"
            aria-label="Scroll categories right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Categories;
