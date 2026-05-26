import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import es from "../data/quotes/es.json";
import en from "../data/quotes/en.json";

export type Language = "es" | "en";

type Quote = {
  id: number;
  author: string;
  quote: string;
  topics: string[];
};

type LanguageData = {
  language: Language;
  welcomeMessage: string;
  buttonText: string;
  quotes: Quote[];
};

type LanguageContextType = {
  language: Language;

  setLanguage: (lang: Language) => void;

  data: LanguageData;
};

const languageMap: Record<Language, LanguageData> = {
  es,
  en,
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
