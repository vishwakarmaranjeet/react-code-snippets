import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InputAdornment from "@mui/material/InputAdornment";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function UseAutoComplete({ moviesList }) {
  const [value, setValue] = React.useState([]);
  const handleOnChange = (e, value) => {
    console.log("Selected values", value);
    setValue(value);
  };
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="auto-complete"
      popupIcon={false}
      disableCloseOnSelect
      onChange={handleOnChange}
      getOptionLabel={(option) => option?.label?.toString()}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      value={value}
      options={moviesList || []}
      getOptionDisabled={(option) => {
        if (value.some((day) => day.label === option.label)) {
          return true;
        }
        return false;
      }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}
