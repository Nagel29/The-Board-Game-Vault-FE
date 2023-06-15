import { fetchGames } from "./utilities/apiCalls"
import { useState } from "react"
import Form from "./Form"
import { Container } from "@mui/material"
import { FilterLists } from "./utilities/interfaces"
import GameSearchList from "./GameSearchList"

const FindGames = ({
  userInfo,
}: {
  userInfo: { username: string; userID: number }
}) => {
  const [foundGames, setFoundGames] = useState<any>({ games: [] })

  const updateSearchedGames = async (
    searchInput: string,
    categories: FilterLists[],
    mechanics: FilterLists[]
  ) => {
    let games = await fetchGames(searchInput, categories, mechanics)
    setFoundGames(games)
  }

  return (
    <div>
      <Form updateSearchedGames={updateSearchedGames} />
      <GameSearchList gamesList={foundGames} userInfo={userInfo} />
    </div>
  )
}

export default FindGames
