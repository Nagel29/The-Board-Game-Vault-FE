import { useState } from "react"
import "./App.css"
import Nav from "./Nav"
import FindGames from "./FindGames"
import Login from "./Login"
import Register from "./Register"
import { Routes, Route } from "react-router-dom"
import MyVault from "./MyVault"

function App() {
  const [username, setUsername] = useState<string>("")

  const displayUser = (user: string) => {
    setUsername(user)
  }

  return (
    <div>
      <Nav displayName={username}/>
      <Routes>
        <Route path="/" element={<Login displayUser={displayUser} />} />
        <Route path="/Register" element={<Register displayUser={displayUser}/>} />
        <Route path="/FindGames" element={<FindGames />} />
        <Route path="/MyVault" element={<MyVault />} />
      </Routes>
    </div>
  )
}

export default App
