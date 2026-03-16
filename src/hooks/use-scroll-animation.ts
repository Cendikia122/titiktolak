import { useEffect, useRef, useCallback } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
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

    if (ref.current) {
      const elements = ref.current.querySelectorAll(
        ".scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger-children"
      );
      elements.forEach((el) => observer.observe(el));
    }

    return observer;
  }, []);

  useEffect(() => {
    const observer = observe();
    return () => observer.disconnect();
  }, [observe]);

  return ref;
}
