import { useState } from "react";
import { gsap } from "gsap";

type HeaderProps = {
  language: string;
  onLanguageChange: (lang: string) => void;
};

export default function Header({
  language,
  onLanguageChange,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur">
      {/* Logo / título */}
      <div>
        <h1 className="text-lg font-semibold text-white md:text-2xl">
          Aphorism Machine
        </h1>
      </div>

      {/* Desktop menu */}
      <div className="hidden items-center gap-4 md:flex">
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none transition focus:border-violet-500"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Mobile burger */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
        >
          <div className="burger-top h-0.5 w-7 rounded-full bg-white" />

          <div className="burger-middle h-0.5 w-7 rounded-full bg-white" />

          <div className="burger-bottom h-0.5 w-7 rounded-full bg-white" />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute right-6 top-20 flex w-48 flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
            <button
              onClick={() => onLanguageChange("es")}
              className={`rounded-xl px-4 py-2 text-left transition ${
                language === "es"
                  ? "bg-violet-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              Español
            </button>

            <button
              onClick={() => onLanguageChange("en")}
              className={`rounded-xl px-4 py-2 text-left transition ${
                language === "en"
                  ? "bg-violet-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
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
