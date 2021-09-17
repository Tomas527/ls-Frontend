import React from "react";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import SignUpForm from "./SignUpForm";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import "components/screens/auth/AuthViewStyle.css";
import TOUButton from "components/common/Button/TOUButton";
import { connect } from "react-redux";
import { register } from "actions/auth";

const SignUpView = (props) => {
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
        <SignUpForm onSubmit={onFormSubmit} errorMessage={props.message} />
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
    const { dispatch } = props;
    dispatch(register(firstName, lastName, email, password));
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
  }
};

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}
export default connect(mapStateToProps)(SignUpView);
