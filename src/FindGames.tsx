import { fetchGames } from "./utilities/apiCalls"
import { useState, useEffect } from "react"
import Form from "./Form"
import { Container } from "@mui/material"
import { FilterLists } from "./utilities/interfaces"
import GameSearchList from "./GameSearchList"
import { useNavigate } from "react-router-dom"

const FindGames = ({
  userInfo,
}: {
  userInfo: { username: string; userID: number }
}) => {
  const [foundGames, setFoundGames] = useState<any>({ games: [] })
  const navigate = useNavigate()

  const updateSearchedGames = async (
    searchInput: string,
    categories: FilterLists[],
    mechanics: FilterLists[]
  ) => {
    let games = await fetchGames(searchInput, categories, mechanics)
    setFoundGames(games)
  }

  useEffect(() => {
    if (!userInfo.userID) {
      navigate("/")
    }
  })

  return (
    <div>
      <Form updateSearchedGames={updateSearchedGames} />
      <GameSearchList gamesList={foundGames} userInfo={userInfo} />
    </div>
  )
}

export default FindGames
