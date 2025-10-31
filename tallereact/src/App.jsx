import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntegracionAndres from './components/Andres/IntegracionAndres.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" aria-label="Abrir sitio de Vite en una nueva pestaña">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" aria-label="Abrir sitio de React en una nueva pestaña">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido al Taller React</h1>
      <IntegracionAndres />
      <div className="card">
        <button
          aria-label="Incrementar contador"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" aria-live="polite">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

