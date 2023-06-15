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
  const [userID, setUserID] = useState<number>(0)

  const updateUser = (user: string, id: number) => {
    setUsername(user)
    setUserID(id)
  }

  return (
    <div>
      <Nav displayName={username} updateUser={updateUser}/>
      <Routes>
        <Route path="/" element={<Login updateUser={updateUser} />} />
        <Route path="/Register" element={<Register updateUser={updateUser}/>} />
        <Route path="/FindGames" element={<FindGames userInfo={{username, userID}}/>} />
        <Route path="/MyVault" element={<MyVault userInfo={{username, userID}}/>} />
      </Routes>
    </div>
  )
}

export default App
