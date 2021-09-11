import React from "react";
import SignInForm from "./SignInForm";
import "./SignInPage.css";
import AuthSwitch from "../../common/AuthSwitchButton/AuthSwitch";
import Spacer from "../../common/Spacer";
import LanguageSelector from "../../common/Language Selector/LanguageSelector";

const SignInPage = () => {
  return (
    <div className="pageStyle">
      <h1 className="header">Sign In</h1>
      <div>
        <LanguageSelector onChange={(text) => console.log(text)} />
        <Spacer />
        <SignInForm />
        <Spacer />
        <AuthSwitch />
      </div>
    </div>
  );
};

export default SignInPage;
