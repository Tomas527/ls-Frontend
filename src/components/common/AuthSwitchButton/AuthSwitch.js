import React from "react";
import "./AuthSwitch.css";
import { Link } from "react-router-dom";
import Spacer from "../Spacer";
import {
  LABEL_DONT_HAVE_ACCOUNT,
  LABEL_HAVE_ACCOUNT,
  SIGN_IN,
  SIGN_UP,
} from "constants/Constants";

const AuthSwitch = ({ isSignInMode }) => {
  return (
    <div className="switchStyle">
      <div>{isSignInMode ? LABEL_DONT_HAVE_ACCOUNT : LABEL_HAVE_ACCOUNT}</div>
      <Spacer />
      <Link to={isSignInMode ? "/signup" : "/"}>
        {isSignInMode ? SIGN_UP : SIGN_IN}
      </Link>
    </div>
  );
};

export default AuthSwitch;
