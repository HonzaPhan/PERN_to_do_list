import { Box, Button, FormControl, Input, Typography } from "@mui/material";
import { useState } from "react";
import { CustomizedBox } from "../MUI-customized-components/Box";
import axios from "axios";
import { API_URL } from "../api/ToDoAPI";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [confirmPassword, setConfirmPassword] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const viewLogin = (status: boolean) => {
    setError(null);
    setIsLogIn(status);
  };

  const handleSubmit = async (
    e: { preventDefault: () => void },
    endpoint: any
  ) => {
    e.preventDefault();

    if (!isLogIn && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    await axios({
      method: "POST",
      url: `${API_URL}/${endpoint}/`,
      data: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const data = response.data
        
        if(data.detail) {
          setError(data.detail)
        } else {
          setCookie('Email', data.email)
          setCookie('Authtoken', data.token)
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <CustomizedBox>
      <Box>
        <FormControl
          sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}
        >
          <FormControl>
            <Typography
              variant="h2"
              sx={{ paddingBottom: "2rem" }}
              textAlign="center"
            >
              {isLogIn ? "Please log in!" : "Please sign up!"}
            </Typography>
            <Input placeholder="E-mail" type="email" required onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          {!isLogIn && (
            <FormControl>
              <Input placeholder="Confirm password" type="password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </FormControl>
          )}
          <Button
            type="submit"
            sx={{ width: "100px", alignSelf: "center" }}
            variant="contained"
            onClick={(e) => handleSubmit(e, isLogIn ? "login" : "signup")}
          >
            {isLogIn ? "Log in" : "Sign up"}
          </Button>
          {error && (
            <Typography variant="h5" color="error">
              {error}
            </Typography>
          )}
        </FormControl>

        <Box
          sx={{
            paddingTop: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h5">
            {isLogIn ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          <Typography variant="h5" color="primary">
            {isLogIn ? (
              <Typography component="a" onClick={() => viewLogin(false)}>
                Sign Up
              </Typography>
            ) : (
              <Typography component="a" onClick={() => viewLogin(true)}>
                Log In
              </Typography>
            )}
          </Typography>
        </Box>
      </Box>
    </CustomizedBox>
  );
};

export default Auth;