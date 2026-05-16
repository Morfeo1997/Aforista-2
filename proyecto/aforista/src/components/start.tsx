import { useRef, useState } from "react";
import { gsap } from "gsap";

type StartProps = {
  onComplete?: () => void;
};

export default function Start({ onComplete }: StartProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        opacity: 1,
      })
      .to(circle, {
        scale: 25,
        duration: 1.2,
        ease: "power4.inOut",
      })
      .to(
        container,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
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
        className="absolute h-40 w-40 rounded-full bg-white opacity-0"
      />

      {/* Contenido */}
      <div className="z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          ¿Qué te interesa saber hoy?
        </h1>

        <p className="max-w-md text-zinc-400">
          Explora pensamientos, ideas y aforismos de distintos temas.
        </p>

        <button
          onClick={handleStart}
          disabled={isAnimating}
          className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 disabled:cursor-not-allowed"
        >
          Quiero aprender algo hoy
        </button>
      </div>
    </section>
  );
}
