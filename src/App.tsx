import { useState } from "react"
import "./App.css"
import Nav from "./Nav"
import FindGames from "./FindGames"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/FindGames" element={<FindGames />}/>
        <Route path="/MyVault" element={<div>MY VAULT</div>}/>
      </Routes>
    </div>
  )
}

export default App
