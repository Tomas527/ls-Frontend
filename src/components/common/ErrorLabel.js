import React from "react";

const ErrorLabel = ({ errorText }) => {
  return <small style={{ color: "red" }}>{errorText} </small>;
};

export default ErrorLabel;
