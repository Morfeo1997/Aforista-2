import { gsap } from "gsap";

import type { QuoteAnimation } from "../types/animation";

export const waveAnimation: QuoteAnimation = (
  element,
  callback
) => {
  gsap.timeline()
    .to(element, {
      opacity: 0,
      rotate: -3,
      x: -30,
      duration: 0.3,
      ease: "power2.in",
    })
    .call(callback)
    .fromTo(
      element,
      {
        opacity: 0,
        rotate: 3,
        x: 30,
      },
      {
        opacity: 1,
        rotate: 0,
        x: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)",
      }
    );
};
