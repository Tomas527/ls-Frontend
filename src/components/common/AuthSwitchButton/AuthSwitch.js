import React from "react";
import "./AuthSwitch.css";
import { Link } from "react-router-dom";
import Spacer from "../Spacer";
import translate from "i18n/translate";

const AuthSwitch = ({ isSignInMode }) => {
  return (
    <div className="switchStyle">
      <div>
        {isSignInMode
          ? translate("LABEL DONT HAVE ACCOUNT")
          : translate("LABEL HAVE ACCOUNT")}
      </div>
      <Spacer />
      <Link to={isSignInMode ? "/signup" : "/"}>
        {isSignInMode ? translate("SIGN UP") : translate("SIGN IN")}
      </Link>
    </div>
  );
};

export default AuthSwitch;
