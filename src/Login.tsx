import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import { loginFetch } from "./utilities/apiCalls"
import { ChangeEvent, useState } from "react"

const Login = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleChange = (field: string, e: ChangeEvent) => {
    if (field === "username") {
      setUsername((e.target as HTMLInputElement).value)
    } else {
      setPassword((e.target as HTMLInputElement).value)
    }
  }

  const handleLogin = async (usernameInput: string, passwordInput: string) => {
    const response = await loginFetch(username, password)
    if (!response.ok) {
      setError(response.error) 
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
      <TextField
        label="Username"
        color="primary"
        focused
        value={username}
        onChange={(e) => handleChange("username", e)}
      />
      <TextField
        label="Password"
        color="primary"
        focused
        value={password}
        onChange={(e) => handleChange("password", e)}
      />
      <p>{error ? error : null}</p>
      <Button variant="contained" color="primary" onClick={() => handleLogin(username, password)}>
        Login
      </Button>
      <Link href="/Register">New user? Register here!</Link>
    </Container>
  )
}

export default Login
