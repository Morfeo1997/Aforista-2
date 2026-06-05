import { fadeAnimation } from "./fade";
import { slideAnimation } from "./slide";
import { scaleAnimation } from "./scale";
import { blurAnimation } from "./blur";
import { rotateAnimation } from "./rotate";
import { flipAnimation } from "./flip";
import { bounceAnimation } from "./bounce";
import { zoomAnimation } from "./zoom";
import { shuffleAnimation } from "./shuffle";
import { waveAnimation } from "./wave";


export const animations = [
  fadeAnimation,
  slideAnimation,
  scaleAnimation,
  blurAnimation,
  rotateAnimation,
  flipAnimation,
  bounceAnimation,
  zoomAnimation,
  shuffleAnimation,
  waveAnimation,
];

export const getRandomAnimation = () => {
  const index = Math.floor(
    Math.random() * animations.length
  );

  return animations[index];
};
