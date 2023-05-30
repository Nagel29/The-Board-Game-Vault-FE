import { useState } from "react"
import "./App.css"
import Nav from "./Nav"
import FindGames from "./FindGames"
import Landing from "./Landing"
import { Routes, Route } from "react-router-dom"
import MyVault from "./MyVault"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/FindGames" element={<FindGames />}/>
        <Route path="/MyVault" element={<MyVault />}/>
      </Routes>
    </div>
  )
}

export default App
