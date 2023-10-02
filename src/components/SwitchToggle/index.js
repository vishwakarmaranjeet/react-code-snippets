import React, {useEffect} from "react";
import Switch from "@mui/material/Switch";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SwitchToggle = () => {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const proceedHandler = () => {
    throw new Error("Error has occured");
    setChecked((prev) => !prev);
    handleClose(false);
  };

  const handleChange = () => {
    setOpen(true);
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Account will be added
          </Typography>
          <br />
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={proceedHandler}
            variant="outlined"
            style={{ marginLeft: "12px" }}
          >
            Yes
          </Button>
        </Box>
      </Modal>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};

export default SwitchToggle;
