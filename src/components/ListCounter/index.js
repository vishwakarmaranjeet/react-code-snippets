import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const fruitList = [
  { id: 1, name: "Mango", isClicked: false, price: 220 },
  { id: 2, name: "Apple", isClicked: false, price: 180 },
  { id: 3, name: "Watermelon", isClicked: false, price: 100 },
  { id: 4, name: "Banana", isClicked: false, price: 60 },
  { id: 5, name: "Kiwi", isClicked: false, price: 250 },
  { id: 6, name: "Guava", isClicked: false, price: 50 },
];
const ListCounter = () => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState([0]);
  const [total, setTotal] = useState(0);

  const handleToggle = (id, price) => {
    console.log(price);
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
      setCount((prevState) => prevState + 1);
      setTotal((prevState) => prevState + price);
    } else {
      newChecked.splice(currentIndex, 1);
      setCount((prevState) => prevState - 1);
      setTotal((prevState) => prevState - price);
    }
    setChecked(newChecked);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: "20px" }}>
      <Card style={{ padding: "20px" }}>
        <h3>Selected fruits: {count}</h3>
        <h3>Sub total: {total}</h3>
        <List
          dense
          sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
        >
          {fruitList.map((data) => {
            const labelId = `checkbox-list-label-${data.id}`;
            return (
              <ListItem key={data.id} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={() => handleToggle(data.id, data.price)}
                  dense
                  style={{ maxWidth: "200px" }}
                >
                  <Checkbox
                    checked={checked.indexOf(data.id) !== -1}
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    id={labelId}
                    primary={data.name}
                    style={{ maxWidth: "200px" }}
                  />
                  <ListItemText id={labelId} primary={data.price} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </Box>
  );
};
export default ListCounter;
