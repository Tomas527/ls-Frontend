import React from "react";
import SignInForm from "./SignInForm";
import "components/screens/Auth/AuthViewStyle.css";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";

const SignInView = () => {
  return (
    <div className="viewStyle">
      <h1>Sign In</h1>
      <div>
        <LanguageSelector
          onChange={(lang) =>
            console.log("user selected a new language: " + lang)
          }
        />
        <Spacer />
        <SignInForm />
        <Spacer />
        <AuthSwitch isSignInMode={true} />
      </div>
    </div>
  );
};

export default SignInView;
