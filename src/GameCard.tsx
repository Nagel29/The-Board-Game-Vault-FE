import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
// import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"

const GameCard = ({ game }: { game: any }) => {
  return (
    <Box my={4} width='90%' height='300px' zIndex={-1}>
      <Typography variant="h6" paragraph align="center">
        {game.name}
      </Typography>
      <Card sx={{ position: "relative", height: '100%' }}>
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
        <CardContent sx={{ position: "relative", backgroundColor: 'transparent' }}>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </Card>
    </Box>
    // <Card sx={{ width: 250, zIndex: -1, backgroundImage: game.images.large }}>
    //   <CardMedia
    //       component="img"
    //       height="140"
    //       // sx={{objectFit: 'contain'}}
    //       // image={game.images.large}
    //       // alt={`${game.name} box art`}
    //     />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {game.name}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  )
}

export default GameCard
