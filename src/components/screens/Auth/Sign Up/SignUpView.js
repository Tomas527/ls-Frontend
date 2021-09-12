import React from "react";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import SignUpForm from "./SignUpForm";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import "components/screens/Auth/AuthViewStyle.css";

const SignUpView = () => {
  return (
    <div className="viewStyle">
      <h1>Sign Up</h1>
      <div>
        <LanguageSelector
          onChange={(lang) =>
            console.log("user selected a new language: " + lang)
          }
        />
        <Spacer />
        <SignUpForm />
        <Spacer />
        <AuthSwitch isSignInMode={false} />
      </div>
    </div>
  );
};

export default SignUpView;
