import { useState } from 'react'
import Header from "./components/Header"
import SetHomePage from './components/Home-page'
import SingleArticle from './components/Article-page';
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<SetHomePage />} />
        <Route exact path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  )
}

export default App
