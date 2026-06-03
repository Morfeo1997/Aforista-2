import { fadeAnimation } from "./fade";
import { slideAnimation } from "./slide";
import { scaleAnimation } from "./scale";

export const animations = [
  fadeAnimation,
  slideAnimation,
  scaleAnimation,
];

export const getRandomAnimation = () => {
  const index = Math.floor(
    Math.random() * animations.length
  );

  return animations[index];
};
