import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const blurAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.35,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power2.out",
      }
    );
};
