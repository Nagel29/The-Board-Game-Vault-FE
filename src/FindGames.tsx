import { fetchGames } from "./utilities/apiCalls"
import { useState } from "react"
import Form from "./Form"
import { Container } from "@mui/material"
import  { FilterLists } from './utilities/interfaces'

const FindGames = () => {
  const [foundGames, setFoundGames] = useState()

  const updateSearchedGames = async (searchInput: string, categories: FilterLists[], mechanics: FilterLists[]) => {
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


