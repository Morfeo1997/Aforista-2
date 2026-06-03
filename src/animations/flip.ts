import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const flipAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      rotateY: 90,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        rotateY: -90,
        opacity: 0,
      },
      {
        rotateY: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
};
