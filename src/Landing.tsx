import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

const Landing = () => {
  return (
    <Container
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "white",
        color: "black",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
     <TextField label="Username" color="primary" focused/>
     <TextField label="Password" color="primary" focused/>
     <Button variant="contained" color="primary">Login</Button>
     <Link href="/Register">New user? Register here!</Link>
    </Container>
  )
}

export default Landing
