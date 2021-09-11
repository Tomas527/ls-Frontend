import React from "react";
import "./AuthSwitch.css";
import { Button } from "@material-ui/core";

const AuthSwitch = () => {
  return (
    <div className="switchStyle">
      <div>Don't have an account?</div>
      <Button style={{ textTransform: "none" }} color="primary">
        Sign Up
      </Button>
    </div>
  );
};

export default AuthSwitch;
