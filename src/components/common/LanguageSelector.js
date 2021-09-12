import React, { useState } from "react";
import { FormControl, Select } from "@material-ui/core";

const LanguageSelector = ({ onChange }) => {
  const [value, setValue] = useState("En");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <FormControl
        variant="outlined"
        color="primary"
        style={{ backgroundColor: "white" }}
      >
        <Select
          native
          value={value}
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
    onChange(newValue);
  }
};

export default LanguageSelector;
