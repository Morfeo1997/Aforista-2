import { useMemo, useState } from "react";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";

import {
  getRandomAnimation,
} from "../animations/index";
import { getThemeFromQuote } from "../utils/getThemeFromQuote";

type Quote = {
  id: number;
  author: string;
  quote: string;
  topics: string[];
  year?: number;
  source?: string;
};

type Topic = {
  id: string;
  label: string;
};


export default function Main() {
  const { data } = useLanguage();

  const quoteRef =
  useRef<HTMLDivElement>(null);

  const { setTheme } = useTheme();

  const [selectedTopic, setSelectedTopic] =
  useState<string>("all");

  const [currentQuote, setCurrentQuote] =
    useState<Quote | null>(null);

  const topics: Topic[] = data.topics;

  const quotes: Quote[] = data.quotes;
  
  console.log(
  quotes.filter(
    (quote) => !Array.isArray(quote.topics)
  )
);

  const filteredQuotes = useMemo(() => {
  if (selectedTopic === "all") {
    return quotes;
  }

  return quotes.filter((quote) =>
    quote.topics?.includes(selectedTopic)
  );
}, [quotes, selectedTopic]);

  const generateQuote = () => {
  if (!filteredQuotes.length) return;

  const randomQuote =
    filteredQuotes[
      Math.floor(
        Math.random() * filteredQuotes.length
      )
    ];

  const animation =
    getRandomAnimation();

  animation(
    quoteRef.current!,
    () => {
      setCurrentQuote(randomQuote);

      setTheme(
        getThemeFromQuote(randomQuote)
      );
    }
  );
};

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-10">
      <div
        className="flex w-full max-w-4xl flex-col gap-8 rounded-3xl border p-8 shadow-2xl backdrop-blur transition-all duration-500"
        style={{
          background:
            "var(--surface-color)",

          borderColor:
            "var(--border-color)",
        }}
      >
        {/* Caja principal */}
        <div
  className="flex min-h-[320px] items-center justify-center rounded-3xl border p-8 text-center"
  style={{
    borderColor: "var(--border-color)",
  }}
>
        <div
          ref={quoteRef}
          className="w-full"
        >
          {currentQuote ? (
            <div className="space-y-6">
              <p
                className="text-2xl leading-relaxed md:text-4xl"
                style={{
                  color: "var(--primary-text)",
                }}
              >
                “{currentQuote.quote}”
              </p>

              <div className="space-y-2">
                <p
                  className="text-lg md:text-xl"
                  style={{
                    color:
                      "var(--secondary-text)",
                  }}
                >
                  — {currentQuote.author}
                </p>

                {(currentQuote.year ||
                  currentQuote.source) && (
                  <p
                    className="text-sm"
                    style={{
                      color:
                        "var(--secondary-text)",
                    }}
                  >
                    {currentQuote.source}

                    {currentQuote.year &&
                      ` · ${currentQuote.year}`}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold md:text-6xl"
                style={{
                  color: "var(--primary-text)",
                }}
              >
                {data.welcomeMessage}
              </h1>

              <p
                className="text-lg"
                style={{
                  color:
                    "var(--secondary-text)",
                }}
              >
                {data.welcomeText}
              </p>
            </div>
          )}
        </div>
      </div>

        {/* Controles */}
        <div className="flex flex-col gap-4">
          <select
  value={selectedTopic}
  onChange={(e) =>
    setSelectedTopic(e.target.value)
  }
  className="rounded-lg border px-4 py-3"
  style={{
    color: "var(--primary-text)",
    backgroundColor: "var(--surface-color)",
    borderColor: "var(--border-color)",
  }}
>
  <option
    value="all"
    style={{
      color: "var(--primary-text)",
      backgroundColor:
        "var(--surface-color)",
    }}
  >
    {data.allTopics}
  </option>

  {topics.map((topic) => (
    <option
      key={topic.id}
      value={topic.id}
      style={{
        color: "var(--primary-text)",
        backgroundColor:
          "var(--surface-color)",
      }}
    >
      {topic.label}
    </option>
  ))}
</select>

          <button
            onClick={generateQuote}
            className="rounded-2xl px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
            style={{
              background:
                "var(--accent-color)",
            }}
          >
            {data.buttonText}
          </button>
        </div>
      </div>
    </main>
  );
}
