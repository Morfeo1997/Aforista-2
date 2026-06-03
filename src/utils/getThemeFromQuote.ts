import type { ThemeName } from "../context/ThemeContext";

type Quote = {
  topics: string[];
};

const topicThemeMap: Record<
  string,
  ThemeName
> = {
  filosofia: "philosophy",
  ciencia: "science",
  arte: "art",
  vida: "nature",
};

export function getThemeFromQuote(
  quote: Quote
): ThemeName {
  const primaryTopic =
    quote.topics?.[0];

  if (!primaryTopic) {
    return "default";
  }

  return (
    topicThemeMap[primaryTopic] ??
    "default"
  );
}