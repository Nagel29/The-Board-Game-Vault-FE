import { fetchGames } from "./utilities/apiCalls"
import { useState, useEffect } from "react"
import Form from "./Form"
import { Container } from "@mui/material"
import { FilterLists, Game } from "./utilities/interfaces"
import { cleanGames } from './utilities/utilities'
import GameSearchList from "./GameSearchList"
import { useNavigate } from "react-router-dom"

const FindGames = ({
  userInfo,
  updateVaultList,
}: {
  userInfo: { username: string; userID: number; vaultList: string[] }
  updateVaultList: (gameIDs: string[]) => void
}) => {
  const [foundGames, setFoundGames] = useState<Game[]>([])
  const navigate = useNavigate()

  const updateSearchedGames = async (
    searchInput: string,
    categories: FilterLists[],
    mechanics: FilterLists[]
  ) => {
    let games = await fetchGames(searchInput, categories, mechanics)
    let cleanedGames = cleanGames(games.games)
    setFoundGames(cleanedGames)
  }

  useEffect(() => {
    if (!userInfo.userID) {
      navigate("/")
    }
  })

  return (
    <div>
      <Form updateSearchedGames={updateSearchedGames} />
      <GameSearchList
        gamesList={foundGames}
        userInfo={userInfo}
        updateVaultList={updateVaultList}
      />
    </div>
  )
}

export default FindGames
