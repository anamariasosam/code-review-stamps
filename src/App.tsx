import {useState} from 'react'

function App() {
  const [count, setCount] = useState(11)

  return <p>{count}</p>
}

export default App
