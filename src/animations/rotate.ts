import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const rotateAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      rotate: -8,
      duration: 0.3,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        rotate: 8,
      },
      {
        opacity: 1,
        rotate: 0,
        duration: 0.45,
        ease: "back.out(1.4)",
      }
    );
};
