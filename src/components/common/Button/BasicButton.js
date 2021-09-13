import React from "react";
import { Button } from "@material-ui/core";
import "./BasicButton.css";

const BasicButton = ({ text, onClick, isDisabled }) => {
  return (
    <Button
      className="basicButtonStyle"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
};

export default BasicButton;
