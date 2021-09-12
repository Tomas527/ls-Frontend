import React from "react";

const Spacer = ({ height, width }) => {
  return <div style={{ height: height ?? 20, width: width ?? 5 }} />;
};

export default Spacer;
