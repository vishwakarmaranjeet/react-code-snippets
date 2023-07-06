import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserProvider from "../../Context/userContext";
import Consumer from "components/Consumer";
import CounterWithReducer from "components/CounterWithReducer";
import StopWatchWithReducer from "components/StopWatchWithReducer";
import StopWatchWithoutReducer from "components/StopWatchWithoutReducer";
import CounterWithCustomHook from "components/CounterWithCustomHook";
import ImageWithPreview from "components/ImageWithPreview";
import CounterWithCustomUseReducerHook from "components/CounterWithCustomUseReducerHook";
import Parent from "components/UseImperativeHandle/Parent";
import useHover from "Hooks/useHover";

const Home = () => {
  const [ref, isHovered] = useHover();
  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: "20px" }}>
      <h2 style={{ color: isHovered ? "red" : "#333" }} ref={ref}>
        Welcome to ReactJs
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <CounterWithCustomHook />
        </Grid>
        <Grid item xs={6} md={4}>
          <CounterWithReducer />
        </Grid>
        <Grid item xs={6} md={4}>
          <CounterWithCustomUseReducerHook />
        </Grid>
        <Grid item xs={6} md={4}>
          <StopWatchWithReducer />
        </Grid>
        <Grid item xs={6} md={4}>
          <StopWatchWithoutReducer />
        </Grid>
        <Grid item xs={6} md={4}>
          <UserProvider>
            <Consumer />
          </UserProvider>
        </Grid>
        <Grid item xs={6} md={4}>
          <ImageWithPreview />
        </Grid>
        <Grid item xs={6} md={4}>
          <Parent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
