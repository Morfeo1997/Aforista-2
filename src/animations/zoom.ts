import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const zoomAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      scale: 1.15,
      duration: 0.3,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        scale: 0.75,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
};
