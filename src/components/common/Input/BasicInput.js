import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { emailIsValid } from "./Validations";

const BasicInput = ({ placeholder, onChange, validateEmail }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <TextField
      //we want to show error if the input is not valid
      error={validateEmail ? !emailIsValid(inputValue) : false}
      style={{ width: 380 }}
      id="standard-basic"
      label={placeholder}
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );

  function handleChange(newValue) {
    setInputValue(newValue);
    onChange(newValue);
  }
};

export default BasicInput;
