import {useState} from 'react'
import './App.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App__section">
      <button onClick={() => setCount(count - 1)} className="App__button">
        -
      </button>
      <h1 className="App__title">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="App__button">
        +
      </button>
    </main>
  )
}

export default App
