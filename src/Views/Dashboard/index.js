import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddToFavourite from "components/AddToFavourite";

const Dashboard = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  const isLocalStorageEmpty = localStorage.getItem("isLoggedIn") === null || localStorage.getItem("isLoggedIn") === "";
  useEffect(() => {
    if (isLocalStorageEmpty) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      </Box>
      {isLocalStorageEmpty? (
        <h1 className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          You need to login to access dashboard
        </h1>
      ) : (
        <>
          <Typography component="h1" variant="h4"> Welcome to {state?.username}</Typography>
          <Button
            size="small"
            type="button"
            color="error"
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <AddToFavourite />
        </>
      )}
    </Container>
  );
};

export default Dashboard;
