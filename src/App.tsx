import { useState } from 'react'
import Start from './components/start'
import Main from './components/main'
import Header from './components/header'

function App() {
  const [started, setStarted] = useState(false);

  const [language, setLanguage] = useState("es");

  return (
    <>
    
      <Header
        language={language}
        onLanguageChange={setLanguage}
      />
    	{!started ? (
        <Start onComplete={() => setStarted(true)} />
      ) : (
          <Main />
      )}
    </>
  )
}

export default App
