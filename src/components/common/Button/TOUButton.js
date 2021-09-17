import { BUTTON_TERMS_OF_USE } from "constants/uiConstants";
import React from "react";
import TextButton from "./TextButton";

const TOUButton = ({ onClick }) => {
  return (
    <TextButton
      buttonText={BUTTON_TERMS_OF_USE}
      onClick={onClick}
      size="small"
    />
  );
};

export default TOUButton;
