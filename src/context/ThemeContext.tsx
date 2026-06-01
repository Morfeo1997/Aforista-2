import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import defaultTheme from "../data/themes/default.json";
import philosophyTheme from "../data/themes/philosophy.json";
import scienceTheme from "../data/themes/science.json";
import artTheme from "../data/themes/art.json";
import natureTheme from "../data/themes/nature.json";

import {gsap} from "gsap";

export type ThemeName =
  | "default"
  | "philosophy"
  | "science"
  | "art"
  | "nature";

type Theme = {
  id: ThemeName;

  name: string;

  colors: {
    background: string;
    surface: string;

    primaryText: string;
    secondaryText: string;

    accent: string;
    accentHover: string;

    border: string;
  };

  gradients: {
    main: string;
  };
};

type ThemeContextType = {
  themeName: ThemeName;

  theme: Theme;

  setTheme: (theme: ThemeName) => void;
};

const themesMap: Record<ThemeName, Theme> = {
  default: defaultTheme,
  philosophy: philosophyTheme,
  science: scienceTheme,
  art: artTheme,
  nature: natureTheme,
};

const ThemeContext =
  createContext<ThemeContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function ThemeProvider({
  children,
}: Props) {
  const [themeName, setThemeName] =
    useState<ThemeName>("default");

  const theme = useMemo(() => {
    return themesMap[themeName];
  }, [themeName]);

  useEffect(() => {
  const root = document.documentElement;

  gsap.to(root, {
    duration: 0.8,
    ease: "power2.inOut",

    "--bg-color": theme.colors.background,

    "--surface-color": theme.colors.surface,

    "--primary-text": theme.colors.primaryText,

    "--secondary-text": theme.colors.secondaryText,

    "--accent-color": theme.colors.accent,

    "--accent-hover": theme.colors.accentHover,

    "--border-color": theme.colors.border,
  });

  root.style.setProperty(
    "--main-gradient",
    theme.gradients.main
  );
}, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        theme,
        setTheme: setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme debe usarse dentro de ThemeProvider"
    );
  }

  return context;
}
