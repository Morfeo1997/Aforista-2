import { useState } from "react";

import Start from "./components/start";
import Main from "./components/main";
import Header from "./components/header";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [started, setStarted] = useState(false);
  const [language, setLanguage] = useState("es");

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div
          className="min-h-screen transition-colors duration-500"
          style={{
            background: "var(--main-gradient)",
            color: "var(--primary-text)",
          }}
        >
          {/* Header */}
          <Header 
          language={language}
        onLanguageChange={setLanguage}
        />

          {/* Contenido principal */}
          {!started ? (
            <Start
              onComplete={() => setStarted(true)}
            />
          ) : (
            <Main />
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
