import { useMemo, useState } from "react";

type Quote = {
  id: number;
  author: string;
  quote: string;
  topics: string[];
};

const quotes: Quote[] = [
  {
    id: 1,
    author: "Blaise Pascal",
    quote:
      "La grandeza de un hombre está en reconocer su propia pequeñez.",
    topics: ["filosofia"],
  },
  {
    id: 2,
    author: "Marie Curie",
    quote: "Nada en la vida debe ser temido, solo comprendido.",
    topics: ["ciencia"],
  },
  {
    id: 3,
    author: "Vincent Van Gogh",
    quote: "Sueño mi pintura y luego pinto mi sueño.",
    topics: ["arte"],
  },
  {
    id: 4,
    author: "Confucio",
    quote: "La vida es realmente simple, pero insistimos en complicarla.",
    topics: ["vida"],
  },
];

const topics = [
  { value: "all", label: "Todos" },
  { value: "filosofia", label: "Filosofía" },
  { value: "ciencia", label: "Ciencia" },
  { value: "arte", label: "Arte" },
  { value: "vida", label: "Vida" },
];

export default function Main() {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const filteredQuotes = useMemo(() => {
    if (selectedTopic === "all") return quotes;

    return quotes.filter((quote) =>
      quote.topics.includes(selectedTopic)
    );
  }, [selectedTopic]);

  const generateQuote = () => {
    if (filteredQuotes.length === 0) return;

    const randomIndex = Math.floor(
      Math.random() * filteredQuotes.length
    );

    setCurrentQuote(filteredQuotes[randomIndex]);
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-6 py-10">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur">
        {/* Caja principal */}
        <div className="flex min-h-[280px] w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
          {currentQuote ? (
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed text-zinc-100 md:text-3xl">
                “{currentQuote.quote}”
              </p>

              <span className="block text-lg text-zinc-400">
                — {currentQuote.author}
              </span>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                ¿Qué te interesa saber hoy?
              </h1>

              <p className="text-zinc-400">
                Selecciona un tema y descubre una idea nueva.
              </p>
            </div>
          )}
        </div>

        {/* Controles */}
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          >
            {topics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>

          <button
            onClick={generateQuote}
            className="rounded-2xl bg-violet-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500 active:scale-95"
          >
            Generar
          </button>
        </div>
      </div>
    </main>
  );
}
