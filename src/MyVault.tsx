import { useState } from "react"
import { fetchVault } from "./utilities/apiCalls"
import { useEffect } from "react"
import GameSearchList from "./GameSearchList"
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
    let games = gamesData.games.reduce(
      (acc: any, game: any) => {
        acc.games.push(game.games)
        return acc
      },
      { games: [] }
    )
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
      {myGames.games.length > 0 ? (
        <GameSearchList
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
