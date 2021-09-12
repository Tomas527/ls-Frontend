import React from "react";
import "./AuthSwitch.css";
import { Link } from "react-router-dom";
import Spacer from "../Spacer";
import {
  DONT_HAVE_ACCOUNT_QUESTION,
  HAVE_ACCOUNT_QUESTION,
  SIGN_IN,
  SIGN_UP,
} from "Constants";

const AuthSwitch = ({ isSignInMode }) => {
  return (
    <div className="switchStyle">
      <div>
        {isSignInMode ? DONT_HAVE_ACCOUNT_QUESTION : HAVE_ACCOUNT_QUESTION}
      </div>
      <Spacer />
      <Link to={isSignInMode ? "/signup" : "/"}>
        {isSignInMode ? SIGN_UP : SIGN_IN}
      </Link>
    </div>
  );
};

export default AuthSwitch;
