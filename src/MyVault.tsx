import { useState } from "react"
import { fetchVault } from "./utilities/apiCalls"
import { useEffect } from "react"
import GameSearchList from "./GameSearchList"

const MyVault = ({
  userInfo,
}: {
  userInfo: { username: string; userID: number }
}) => {
  const [myGames, setMyGames] = useState<any>({games: []})

  const getUpdatedVault = async () => {
    let gamesData = await fetchVault(userInfo.userID)
    let games = gamesData.reduce(
      (acc: any, game: any) => {
        acc.games.push(game.games)
        return acc
      },
      { games: [] }
    )
    setMyGames(games)
  }

  useEffect(() => {
    getUpdatedVault()
  }, [])

  return (
    <>
      {myGames.games.length > 0 ? (
        <GameSearchList gamesList={myGames} userInfo={userInfo} getUpdatedVault={getUpdatedVault}/>
      ) : (<div>NO GAMES IN VAULT</div>)}
    </>
  )
}

export default MyVault
