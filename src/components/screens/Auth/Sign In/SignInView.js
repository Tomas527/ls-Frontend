import React from "react";
import SignInForm from "./SignInForm";
import "components/screens/auth/AuthViewStyle.css";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import TOUButton from "components/common/Button/TOUButton";
import { connect } from "react-redux";
import { login } from "actions/auth.action";
import translate from "i18n/translate";

const SignInView = (props) => {
  return (
    <div className="authViewStyle">
      <h1>{translate("SIGN IN")}</h1>
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
    props.login(email, password);
  }
};

function mapStateToProps(state) {
  const { message } = state.messageReducer;
  return {
    message,
  };
}

export default connect(mapStateToProps, { login })(SignInView);
