import React, { useRef } from "react";
import Card from "@mui/material/Card";
import Child from "../Child";

const userObj = {
  firstName: "One",
  lastName: "Two",
};
const Parent = () => {
  const childRef = useRef(null);

  const handleShowMessage = (value) => {
    childRef.current.showMessage(value);
  };

  const userDetails = () => {
    childRef.current.userDetails(userObj);
  };
  return (
    <Card
      sx={{ maxWidth: 340 }}
      style={{
        padding: "20px",
        minHeight: "125px",
        maxHeight: "125px",
        overflow: "auto",
      }}
    >
      <h3>UseImperative example</h3>
      <Child ref={childRef} />
      <button onClick={() => handleShowMessage(true)}>Show Message</button>
      <button onClick={() => userDetails()}>Get user details</button>
    </Card>
  );
};
export default Parent;
