import { useEffect, useRef } from "react";

const useFadeUpOnScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el =  ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-up-visible");
          observer.unobserve(el); // animate once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useFadeUpOnScroll;
