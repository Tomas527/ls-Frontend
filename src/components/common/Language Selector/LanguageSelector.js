import React, { useState } from "react";
import { FormControl, Select } from "@material-ui/core";
import "./LanguageSelector.css";

const LanguageSelector = (props) => {
  const [value, setValue] = useState("En");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <FormControl variant="standard" className="formControl">
        <Select
          native
          label={value}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="En">En</option>
          <option value="He">He</option>
        </Select>
      </FormControl>
    </div>
  );

  function handleChange(newValue) {
    setValue(newValue);
    props.onChange(newValue);
  }
};

export default LanguageSelector;
