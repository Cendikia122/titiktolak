import { useEffect, useRef, useCallback } from "react";

const ANIMATED_SELECTOR =
  ".scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger-children";

function revealVisibleElements(elements: Element[]) {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top < viewportHeight * 0.9 && rect.bottom > 0;

    if (isVisible) {
      el.classList.add("visible");
    }
  });
}

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    const root = ref.current;
    if (!root) return null;

    const elements = Array.from(root.querySelectorAll(ANIMATED_SELECTOR));
    if (elements.length === 0) return null;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return null;
    }

    revealVisibleElements(elements);
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

    const handleViewportChange = () => revealVisibleElements(elements);

    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return {
      disconnect: () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleViewportChange);
        window.removeEventListener("resize", handleViewportChange);
      },
    };
  }, []);

  useEffect(() => {
    const observer = observe();
    return () => observer?.disconnect();
  }, [observe]);

  return ref;
}
