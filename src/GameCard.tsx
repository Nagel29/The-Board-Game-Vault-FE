import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import { addGameToVault } from "./utilities/apiCalls"
import { removeFromVault } from "./utilities/apiCalls"

const GameCard = ({
  game,
  userInfo,
  getUpdatedVault,
}: {
  game: any
  userInfo: { username: string; userID: number }
  getUpdatedVault?: () => void
}) => {
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
          <Button
            size="small"
            variant="contained"
            onClick={() => addGameToVault(userInfo.userID, game.id, game)}
          >
            Add to Vault
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={async () => {
              await removeFromVault(userInfo.userID, game.id, game)
              getUpdatedVault ? getUpdatedVault() : null
            }}
          >
            Remove from Vault
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default GameCard
