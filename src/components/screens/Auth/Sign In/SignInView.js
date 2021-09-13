import React from "react";
import SignInForm from "./SignInForm";
import "components/screens/Auth/AuthViewStyle.css";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import TOUButton from "components/common/Button/TOUButton";

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
      <TOUButton
        onClick={() =>
          console.log("show user our terms of use and privacy policy")
        }
      />
    </div>
  );
};

export default SignInView;
