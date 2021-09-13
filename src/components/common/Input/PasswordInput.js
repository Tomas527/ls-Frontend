import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "./InputStyle.css";

const PasswordInput = ({ placeholder, onChange, errored }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl className="basicInputStyle">
      <InputLabel htmlFor="standard-adornment-password">
        {placeholder}
      </InputLabel>
      <Input
        error={errored}
        id="standard-adornment-password"
        value={password}
        type={showPassword ? "text" : "password"}
        onChange={(e) => handleChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle passowrd visibility"
              onClick={onToggleVisibility}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );

  function onToggleVisibility() {
    setShowPassword(!showPassword);
  }

  function handleChange(newValue) {
    setPassword(newValue);
    onChange(newValue);
  }
};

export default PasswordInput;
