import { useState } from 'react'
import Header from "./components/Header"
import SetHomePage from './components/Home-page'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SetHomePage />
    </>
  )
}

export default App
