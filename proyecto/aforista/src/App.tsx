import { useState } from 'react'
import Start from './components/start'
import Main from './components/main'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <>
    	{!started ? (
        <Start onComplete={() => setStarted(true)} />
      ) : (
        <Main />
      )}
    </>
  )
}

export default App
