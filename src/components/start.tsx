import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";

type StartProps = {
  onComplete?: () => void;
};

export default function Start({ onComplete }: StartProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

    const { data } = useLanguage();

  const handleStart = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    const circle = circleRef.current;
    const container = containerRef.current;

    if (!circle || !container) return;

    const timeline = gsap.timeline({
  onComplete: () => {
    onComplete?.();
      },
    });

    timeline
      .set(circle, {
        scale: 0,
        rotate: 0,
        opacity: 1,
      })
      .to(circle, {
        scale: 25,
        rotate: 360,
        duration: 1.4,
        ease: "power4.inOut",
      })
      .to(
        circle,
        {
          opacity: 0.85,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(
        container,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.5"
      );
  };

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Círculo animado */}
      <div
        ref={circleRef}
        className="absolute h-40 w-40 rounded-full opacity-0"
        style={{
  			background: `
    			conic-gradient(
      			#8b7285,
      			#a58a75,
      			#b2a07a,
      			#7f9b85,
      			#6f8f95,
      			#7b82a3,
      			#907da6,
      			#8b7285
    			)
  			`,
			}}
      />

      {/* Contenido */}
      <div className="z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {data.startTitle}
        </h1>

        <p className="max-w-md text-zinc-400">
          {data.startDescription}
        </p>

        <button
          onClick={handleStart}
          disabled={isAnimating}
          className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 disabled:cursor-not-allowed"
        >
          {data.startButton}
        </button>
      </div>
    </section>
  );
}
