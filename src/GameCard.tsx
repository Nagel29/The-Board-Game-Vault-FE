import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import { addGameToVault } from "./utilities/apiCalls"
import { removeFromVault } from "./utilities/apiCalls"
import { Game } from "./utilities/interfaces"
import { useState, useEffect } from "react"

const GameCard = ({
  game,
  userInfo,
  getUpdatedVault,
  updateVaultList,
}: {
  game: Game
  userInfo: { username: string; userID: number; vaultList: string[] }
  getUpdatedVault?: () => void
  updateVaultList: (gameIDs: string[]) => void
}) => {
  const [inVault, setInVault] = useState<boolean>(false)
  const checkVault = () => {
    if (userInfo.vaultList.includes(game.id)) {
      setInVault(true)
    } else {
      setInVault(false)
    }
  }

  useEffect(() => {
    checkVault()
  })

  return (
    <Box my={4} width="90%" height="300px">
      <Card
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          paragraph
          align="center"
          sx={{
            backgroundColor: "rgb(106, 121, 115, .75)",
            zIndex: 1,
            color: "white",
          }}
        >
          {game.name}
        </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={game.images.large}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "100%",
          }}
        />
        <CardContent
          sx={{ position: "relative", backgroundColor: "transparent" }}
        ></CardContent>
        <CardActions sx={{ backgroundColor: "transparent", zIndex: 1 }}>
          {!inVault ? (
            <Button
              size="small"
              variant="contained"
              onClick={async () => {
                let response = await addGameToVault(
                  userInfo.userID,
                  game.id,
                  game
                )
                updateVaultList(response.vaultList)
                getUpdatedVault ? getUpdatedVault() : null
              }}
            >
              Add to Vault
            </Button>
          ) : null}
          {inVault ? (
            <Button
              size="small"
              variant="contained"
              onClick={async () => {
                let response = await removeFromVault(
                  userInfo.userID,
                  game.id,
                  game
                )
                updateVaultList(response.vaultList)
                getUpdatedVault ? getUpdatedVault() : null
              }}
            >
              Remove from Vault
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Box>
  )
}

export default GameCard
