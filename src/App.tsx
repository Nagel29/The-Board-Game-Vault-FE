import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./Nav"
import FindGames from './FindGames'
import { Container } from '@mui/material'

function App() {

  return (
    <div>
      <Nav />
      <FindGames />
    </div>
  )
}

export default App
