import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { emailIsValid } from "./Validations";
import "./InputStyle.css";

const BasicInput = ({
  placeholder,
  onChange,
  validateEmail,
  isRequired,
  errored,
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <TextField
      required={isRequired}
      error={errored ? true : validateEmail ? !emailIsValid(inputValue) : false}
      className="basicInputStyle"
      id="standard-basic"
      label={placeholder}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );

  function handleChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    onChange(e.target.value);
  }
};

export default BasicInput;
