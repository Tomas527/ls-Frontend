import React from "react";
import "./AuthSwitch.css";
import { Link } from "react-router-dom";
import Spacer from "../Spacer";

const AuthSwitch = ({ isSignInMode }) => {
  return (
    <div className="switchStyle">
      <div>{isSignInMode ? "Don't have an account?" : "Have an account?"}</div>
      <Spacer />
      <Link to={isSignInMode ? "/signup" : "/"}>
        {isSignInMode ? "Sign Up" : "Sign In"}
      </Link>
    </div>
  );
};

export default AuthSwitch;
