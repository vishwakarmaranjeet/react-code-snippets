import useCounterReducer from "../../Hooks/useCounterReducer";
import Card from "@mui/material/Card";

const initialState = {
  counter: 0,
};

const CounterWithCustomUseReducerHook = () => {
  const [state, setState] = useCounterReducer(initialState);
  return (
    <Card sx={{ maxWidth: 340 }} style={{ padding: "20px" }}>
      <h4>Counter with custom hook reducer</h4>
      <h3>{state.counter}</h3>
      <button type="button" onClick={() => setState("INCREMENT")}>
        +
      </button>
      <button type="button" onClick={() => setState("DECREMENT")}>
        -
      </button>
    </Card>
  );
};

export default CounterWithCustomUseReducerHook;
