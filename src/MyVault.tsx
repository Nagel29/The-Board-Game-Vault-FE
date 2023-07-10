import { useState } from "react"
import { fetchVault } from "./utilities/apiCalls"
import { Game } from "./utilities/interfaces"
import { useEffect } from "react"
import GameList from "./GameList"
import { useNavigate } from "react-router-dom"

const MyVault = ({
  userInfo,
  updateVaultList,
}: {
  userInfo: { username: string; userID: number; vaultList: string[] }
  updateVaultList: (gameIDs: string[]) => void
}) => {
  const [myGames, setMyGames] = useState<any>({ games: [] })
  const navigate = useNavigate()

  const getUpdatedVault = async () => {
    let gamesData = await fetchVault(userInfo.userID)
    let games = gamesData.games.reduce((acc: Game[], game: any) => {
      acc.push(game.games)
      return acc
    }, [])
    setMyGames(games)
    updateVaultList(gamesData.gameIDs)
  }

  useEffect(() => {
    if (!userInfo.userID) {
      navigate("/")
    }
    getUpdatedVault()
  }, [])

  return (
    <>
      {myGames.length > 0 ? (
        <GameList
          gamesList={myGames}
          userInfo={userInfo}
          getUpdatedVault={getUpdatedVault}
          updateVaultList={updateVaultList}
        />
      ) : (
        <div>NO GAMES IN VAULT</div>
      )}
    </>
  )
}

export default MyVault
