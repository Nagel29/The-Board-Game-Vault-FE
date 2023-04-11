import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./Nav"
import FindGames from './FindGames'

function App() {

  return (
    <div className="App">
      <Nav />
      <FindGames />
    </div>
  )
}

export default App
