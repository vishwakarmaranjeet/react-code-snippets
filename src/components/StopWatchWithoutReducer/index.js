import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";

const StopWatchWithoutReducer = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalID = useRef(0);

  const startStopCounter = () => {
    setIsRunning(!isRunning);
  };

  const resetCounter = () => {
    setCounter(0);
    clearInterval(intervalID.current);
  };

  useEffect(() => {
    if (isRunning) {
      intervalID.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalID.current);
      intervalID.current = 0;
    };
  }, [isRunning]);

  return (
    <Card sx={{ maxWidth: 340 }} style={{ padding: "20px" }}>
      <h4>Stop watch without useReducer Hook</h4>
      <h3>{counter}</h3>
      <button type="button" onClick={startStopCounter}>
        Start / Stop
      </button>
      <button type="button" onClick={resetCounter}>
        Reset
      </button>
    </Card>
  );
};

export default StopWatchWithoutReducer;
