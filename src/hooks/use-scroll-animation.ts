import { useEffect, useRef, useCallback } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    const root = ref.current;
    if (!root) return null;

    const elements = root.querySelectorAll(
      ".scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger-children"
    );

    root.classList.add("scroll-animate-ready");

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return null;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: never leave content hidden if the observer does not fire.
    window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("visible"));
    }, 600);

    return observer;
  }, []);

  useEffect(() => {
    const observer = observe();
    return () => observer?.disconnect();
  }, [observe]);

  return ref;
}
