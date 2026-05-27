import { useState } from "react";
import { gsap } from "gsap";

import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } =
    useLanguage();

  const toggleMenu = () => {
    const top = document.querySelector(".burger-top");
    const middle = document.querySelector(".burger-middle");
    const bottom = document.querySelector(".burger-bottom");

    if (!top || !middle || !bottom) return;

    if (!menuOpen) {
      gsap.to(top, {
        rotate: 45,
        y: 8,
        duration: 0.3,
      });

      gsap.to(middle, {
        opacity: 0,
        duration: 0.2,
      });

      gsap.to(bottom, {
        rotate: -45,
        y: -8,
        duration: 0.3,
      });
    } else {
      gsap.to(top, {
        rotate: 0,
        y: 0,
        duration: 0.3,
      });

      gsap.to(middle, {
        opacity: 1,
        duration: 0.2,
      });

      gsap.to(bottom, {
        rotate: 0,
        y: 0,
        duration: 0.3,
      });
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-[var(--border-color)] bg-black/30 px-6 py-4 backdrop-blur">
      {/* Logo */}
      <h1 className="text-xl font-semibold text-[var(--primary-text)]">
        Aphorism Machine
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex">
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value as "es" | "en")
          }
          className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-2 text-[var(--primary-text)] outline-none"
        >
          <option value="es">Español</option>

          <option value="en">English</option>
        </select>
      </div>

      {/* Mobile */}
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
        >
          <div className="burger-top h-0.5 w-7 rounded-full bg-white" />

          <div className="burger-middle h-0.5 w-7 rounded-full bg-white" />

          <div className="burger-bottom h-0.5 w-7 rounded-full bg-white" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-16 flex w-44 flex-col gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] p-4 shadow-2xl">
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-xl px-4 py-2 text-left transition ${
                language === "es"
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              Español
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-xl px-4 py-2 text-left transition ${
                language === "en"
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              English
            </button>
          </div>
        )}
      </div>
    </header>
  );
}