import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import translate from "i18n/translate";

const RollPicker = ({ onValueChanged, value }) => {
  return (
    <div style={{ paddingTop: 6 }}>
      <FormControl color="primary" size="medium" style={{ width: "100%" }}>
        <InputLabel id="roll-picker-label">{translate("ROLL")}</InputLabel>

        <Select
          labelId="roll-picker-label"
          onChange={(e) => onValueChanged(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          value={value}
        >
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="FrontEnd Developer">FrontEnd Developer</MenuItem>
          <MenuItem value="BackEnd Developer">BackEnd Developer</MenuItem>
          <MenuItem value="QA">QA</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default RollPicker;
