import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import es from "../data/quotes/es.json";
import en from "../data/quotes/en.json";

export type Language = "es" | "en";

type Quote = {
  id: number;
  author: string;
  quote: string;
  topics: string[];
};

type Topic = {
  id: string;
  label: string;
};

type LanguageData = {
  language: Language;

  welcomeMessage: string;

  startTitle: string;

  startDescription: string;

  startButton: string;

  buttonText: string;

  topics: Topic[];

  quotes: Quote[];

};

type LanguageContextType = {
  language: Language;

  setLanguage: (lang: Language) => void;

  data: LanguageData;
};

const languageMap: Record<
  Language,
  LanguageData
> = {
  es: es as LanguageData,

  en: en as LanguageData,
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: Props) {
  const [language, setLanguage] =
    useState<Language>("es");

  const data = useMemo(() => {
    return languageMap[language];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        data,
        
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe usarse dentro de LanguageProvider"
    );
  }

  return context;
}
