import { fetchGames } from "./utilities/apiCalls"
import { useState } from "react"
import Form from "./Form"
import { Container } from "@mui/material"

const FindGames = () => {
  const [foundGames, setFoundGames] = useState()

  const updateSearchedGames = async (searchInput: string, categories: string[], mechanics: string[]) => {
    let games = await fetchGames(searchInput, categories, mechanics)
    setFoundGames(games)
  }
  
  return (
    <div>
      <Form updateSearchedGames={updateSearchedGames}/>

    </div>
  )
}

export default FindGames


// Access to fetch at 'https://api.boardgameatlas.com/api/search?name=&client_id=zuMwyCtcvF' from origin 'http://127.0.0.1:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.