import React from "react";
import SignInForm from "./SignInForm";
import "components/screens/auth/AuthViewStyle.css";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import TOUButton from "components/common/Button/TOUButton";
import { connect } from "react-redux";
import { login } from "actions/auth";

const SignInView = (props) => {
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
        <SignInForm onSubmit={onFormSubmit} errorMessage={props.message} />
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

  function onFormSubmit(email, password) {
    const { dispatch } = props;
    dispatch(login(email, password));
  }
};

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(SignInView);
