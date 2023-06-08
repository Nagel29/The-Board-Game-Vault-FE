import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import { registerFetch } from "./utilities/apiCalls"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"

const Register = ({updateUser}: {updateUser: (user: string, id: number) => void}) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  let navigate = useNavigate()

  const handleChange = (field: string, e: ChangeEvent) => {
    if (field === "username") {
      setUsername((e.target as HTMLInputElement).value)
    } else {
      setPassword((e.target as HTMLInputElement).value)
    }
  }

  const handleRegister = async () => {
    if (!username || !password) {
      setError("Please input a username & password")
      return
    }
    const response = await registerFetch(username, password)
    if (response.error) {
      setError(response.error)
      return
    } else {
      navigate("/MyVault")
      updateUser(username, response.id)
    }
  }

  return (
    <Container
      sx={{
        width: 350,
        height: 350,
        backgroundColor: "white",
        color: "black",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: '1em'
      }}
    >
      <TextField label="Username" color="primary" focused value={username} onChange={(e) => handleChange("username", e)}/>
      <TextField label="Password" color="primary" focused value={password} onChange={(e) => handleChange("password", e)}/>
      <p style={{color: 'red'}}>{error ? error : null}</p>
      <Button variant="contained" color="primary" onClick={() => handleRegister()}>
        Register
      </Button>
      <Link href="/">Already registered? Log in here!</Link>
    </Container>
  )
}

export default Register
