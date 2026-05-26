import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import defaultTheme from "../data/themes/default.json";
import philosophyTheme from "../data/themes/philosophy.json";
import scienceTheme from "../data/themes/science.json";
import artTheme from "../data/themes/art.json";
import natureTheme from "../data/themes/nature.json";

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

    root.style.setProperty(
      "--bg-color",
      theme.colors.background
    );

    root.style.setProperty(
      "--surface-color",
      theme.colors.surface
    );

    root.style.setProperty(
      "--primary-text",
      theme.colors.primaryText
    );

    root.style.setProperty(
      "--secondary-text",
      theme.colors.secondaryText
    );

    root.style.setProperty(
      "--accent-color",
      theme.colors.accent
    );

    root.style.setProperty(
      "--accent-hover",
      theme.colors.accentHover
    );

    root.style.setProperty(
      "--border-color",
      theme.colors.border
    );

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
