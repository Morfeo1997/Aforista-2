import { fadeAnimation } from "./fade";
import { slideAnimation } from "./slide";
import { scaleAnimation } from "./scale";
import { blurAnimation } from "./blur";
import { rotateAnimation } from "./rotate";
import { flipAnimation } from "./flip";

export const animations = [
  fadeAnimation,
  slideAnimation,
  scaleAnimation,
  blurAnimation,
  rotateAnimation,
  flipAnimation,
];

export const getRandomAnimation = () => {
  const index = Math.floor(
    Math.random() * animations.length
  );

  return animations[index];
};
