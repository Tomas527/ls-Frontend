import React from "react";

const Spacer = (props) => {
  const { height } = props;

  return <div style={{ height: height ?? 20 }} />;
};

export default Spacer;
