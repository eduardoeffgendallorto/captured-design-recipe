import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Fade + subida de 24px dos elementos [data-anim] da seção, com stagger. */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const els = ref.current?.querySelectorAll("[data-anim]");
      if (!els?.length) return;
      gsap.from(els, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    },
    { scope: ref },
  );
}
