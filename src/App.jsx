import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center text-rose-400 font-bold"> I am working when I am red and center</h1>
    </>
  )
}

export default App
