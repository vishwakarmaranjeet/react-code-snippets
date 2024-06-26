import React, { useReducer } from "react";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import { productReducer, initialState } from "./reducer";
// import useFetch from "Hooks/useFetch";
import {
  GET_SUCCESS,
  GET_ERROR,
  ADD_TO_FAVOURITE,
  REMOVE_TO_FAVOURITE,
  TAB_CHANGES,
} from "./actionsTypes";

const LINES_TO_SHOW = 2;
const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
});

const API_URL = `https://dummyjson.com/products`;

const TABS_DATA = [
  {
    id: 1,
    label: "Products",
  },
  {
    id: 2,
    label: "My Favourite",
  },
];
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const AddToFavourite = () => {
  const classes = useStyles();
  // const { data, loading, error } = useFetch(API_URL);
  // console.log(data, loading, error);
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProduct = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: GET_SUCCESS, payload: data?.products });
    } catch (e) {
      console.log("Error occured", e);
      dispatch({ type: GET_ERROR });
    }
  };

  const handleChange = (e, newValue) => {
    dispatch({ type: TAB_CHANGES, payload: newValue });
  };

  const handleProductAddRemove = (isAddProduct, product) => {
    dispatch({ type: isAddProduct ? ADD_TO_FAVOURITE : REMOVE_TO_FAVOURITE, payload: product })
  }

  const isExists = (product) => {
    if (state.favouriteList.filter((item) => item.id === product.id).length > 0) return true
    return false;
  };

  useEffect(() => {
    getProduct();
  }, []);

  const displayProducts = (data, isFavourite) => {
    return (
      <>
        {data?.length ? (
          data?.map((product) => (
            <Card sx={{ maxWidth: 205, margin: "8px" }} key={product.id}>
              <CardMedia component="img" alt={product.brand} image={`${product.thumbnail}`} key={product.id} />
              <CardContent>
                <Typography gutterBottom component="div">{product.brand}</Typography>
                <Typography variant="body2" color="text.secondary" className={classes.multiLineEllipsis}>{product.description}</Typography>
              </CardContent>
              <CardActions>
                {!isFavourite ? (
                  <Button
                    size="small"
                    type="button"
                    variant="outlined"
                    color={isExists(product) ? "error" : "primary"}
                    sx={{ mt: 0, mb: 1 }}
                    onClick={() => isExists(product) ? handleProductAddRemove(false, product) : handleProductAddRemove(true, product)}
                  >
                    {isExists(product) ? "Remove to favorite" : "Add to favorite"}
                  </Button>
                ) : (
                  <Button
                    size="small"
                    type="button"
                    color="error"
                    variant="outlined"
                    sx={{ mt: 0, mb: 1 }}
                    onClick={() => handleProductAddRemove(false, product)}
                  >
                    Remove to favorite
                  </Button>
                )}
              </CardActions>
            </Card>
          ))
        ) : (
          <h2>Nothing is in your favourite list</h2>
        )}
      </>
    );
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={state.value}
          onChange={handleChange}
          aria-label="Product tabs"
        >
          {TABS_DATA.map((data) => (
            <Tab label={data.label} key={data.id} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={state.value} index={0}>
        <Box>
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            {state.isLoader ? (
              <CircularProgress />
            ) : (
              displayProducts(state?.productList, false)
            )}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={state.value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            {displayProducts(state?.favouriteList, true)}
          </Grid>
        </Box>
      </TabPanel>
    </>
  );
};
export default AddToFavourite;
