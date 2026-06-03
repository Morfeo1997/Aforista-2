import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const slideAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      y: -30,
      duration: 0.3,
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }
    );
};
