import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const fadeAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      duration: 0.3,
    })
    .call(callback)
    .to(element, {
      opacity: 1,
      duration: 0.4,
    });
};
