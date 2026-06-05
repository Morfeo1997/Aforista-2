import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const shuffleAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      x: () =>
        gsap.utils.random(-25, 25),
      y: () =>
        gsap.utils.random(-25, 25),
      duration: 0.3,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        x: () =>
          gsap.utils.random(-25, 25),
        y: () =>
          gsap.utils.random(-25, 25),
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
};
