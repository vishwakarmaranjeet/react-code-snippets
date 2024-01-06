import { useEffect } from "react";
import useCounter from "../../Hooks/useCounter";
import Card from "@mui/material/Card";

const CounterWithCustomHook = () => {
  useEffect(() => {
      throw new Error("Error Occured");
  }, [])
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <Card sx={{ maxWidth: 340 }} style={{ padding: "20px" }}>
      <h4>Counter example using custom hook</h4>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </Card>
  );
};

export default CounterWithCustomHook;
