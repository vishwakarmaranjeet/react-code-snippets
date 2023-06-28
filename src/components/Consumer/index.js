import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import Card from "@mui/material/Card";

const Test = () => {
  const [value, updateDetails] = useContext(UserContext);
  return (
    <Card sx={{ maxWidth: 340 }} style={{ padding: "20px" }}>
      <h4>Context example cosumer component</h4>
      <h5>
        {value.firstName} {value.lastName} | {value.email}
      </h5>
      <button onClick={updateDetails}>Update Details</button>
    </Card>
  );
};

export default Test;
