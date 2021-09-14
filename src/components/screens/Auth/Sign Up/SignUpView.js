import React from "react";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import SignUpForm from "./SignUpForm";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import "components/screens/Auth/AuthViewStyle.css";
import TOUButton from "components/common/Button/TOUButton";

const SignUpView = () => {
  return (
    <div className="viewStyle" style={{ height: 1000 }}>
      <h1>Sign Up</h1>
      <div>
        <LanguageSelector
          onChange={(lang) =>
            console.log("user selected a new language: " + lang)
          }
        />
        <Spacer />
        <SignUpForm onSubmit={onFormSubmit} />
        <Spacer />
        <AuthSwitch isSignInMode={false} />
      </div>
      <TOUButton
        onClick={() =>
          console.log("show user our terms of use and privacy policy")
        }
      />
    </div>
  );
  function onFormSubmit(firstName, lastName, email, password) {
    console.log("firstName");
    console.log(firstName);
    console.log("lastName");
    console.log(lastName);
    console.log("email");
    console.log(email);
    console.log("password");
    console.log(password);
  }
};

export default SignUpView;
