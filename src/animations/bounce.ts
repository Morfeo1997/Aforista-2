import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const bounceAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      y: -40,
      duration: 0.25,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "bounce.out",
      }
    );
};
