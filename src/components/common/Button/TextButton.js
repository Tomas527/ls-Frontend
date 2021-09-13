import React from "react";
import { Button } from "@material-ui/core";
import "./TextButton.css";

const TextButton = ({ buttonText, blueText, onClick, size }) => {
  return (
    <Button
      className="textButtonStyle"
      color={blueText ? "primary" : "default"}
      onClick={onClick}
      size={size}
    >
      {buttonText}
    </Button>
  );
};

export default TextButton;
