import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const toLowerCase = (string) => {
  return string.toLocaleLowerCase();
}
const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const userInputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const redirectToDashboard = () => {
    localStorage.setItem("isLoggedIn", true);
    setErrorMessage("");
    navigate("/dashboard", { state: { username: userData.username } });
  }
  const loginHandler = () => {
    const { username, password } = userData
    if (username === "" || password === "") {
      setErrorMessage("Please enter your username & password");
    } else if (toLowerCase(password) !== "admin" || toLowerCase(password) !== "admin"){
      setErrorMessage("Wrong username & password");
    } else {
      redirectToDashboard();
    };
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <p style={{ color: "#d32f2f" }}>{errorMessage}</p>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={userInputHandler}
              error={errorMessage}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={userInputHandler}
              autoComplete="current-password"
              error={errorMessage}
            />
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginHandler}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Login;
