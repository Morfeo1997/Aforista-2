import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const scaleAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
    })
    .call(callback)
    .to(element, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
    });
};
