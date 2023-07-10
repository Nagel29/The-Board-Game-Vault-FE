import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import GameCard from "./GameCard"
import { Game } from "./utilities/interfaces"

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const GameSearchList = ({
  gamesList,
  userInfo,
  getUpdatedVault,
  updateVaultList,
}: {
  gamesList: Game[],
  userInfo: { username: string; userID: number, vaultList: string[] },
  getUpdatedVault?: () => void,
  updateVaultList: (gameIDs: string[]) => void,
}) => {
  const games = gamesList.map((game: Game) => {
    return (
      <Grid
        xs={2}
        sm={4}
        md={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        key={`${game.id}-grid`}
      >
        <GameCard key={game.id} game={game} userInfo={userInfo} getUpdatedVault={getUpdatedVault} updateVaultList={updateVaultList} />
      </Grid>
    )
  })

  return (
    <Box sx={{ flexGrow: 1, mt: 20, zIndex: -1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 12, md: 16 }}
      >
        {games}
      </Grid>
    </Box>
  )
}

export default GameSearchList
