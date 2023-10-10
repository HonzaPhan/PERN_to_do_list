import { Box, FormControl, Input, Typography } from "@mui/material"
import { useState } from "react"

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false)
  const [error, setError] = useState(null)
  const isLogIn = false

  return (
    <Box className="auth-container">
      <Box className="auth-container-box">
        <FormControl>
          <Typography variant="h2">{isLogIn ? "Please log in!" : "Please sign up!"}</Typography>
          <Input placeholder="E-mail" type="email" required/>
          <Input placeholder="Password" type="password" required/>
          {!isLogIn && <Input placeholder="Confirm password" type="password" required/>}
          <Input type="submit" value={isLogIn ? "Log in" : "Sign up"} />
          {error && <Typography variant="h5" color="error">{error}</Typography>}
        </FormControl>

        <Box className="auth-options">
          <Typography variant="h5">{isLogIn ? "Don't have an account?" : "Already have an account?"}</Typography>
          <Typography variant="h5" color="primary">{isLogIn ? "Sign up" : "Log in"}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Auth