import React from "react";
import TextButton from "./TextButton";
import translate from "i18n/translate";

const TOUButton = ({ onClick }) => {
  return (
    <TextButton
      buttonText={translate("BUTTON TERMS OF USE")}
      onClick={onClick}
      size="small"
    />
  );
};

export default TOUButton;
