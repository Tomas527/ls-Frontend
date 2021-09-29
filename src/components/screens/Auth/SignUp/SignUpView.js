import React from "react";
import AuthSwitch from "components/common/AuthSwitchButton/AuthSwitch";
import SignUpForm from "./SignUpForm";
import Spacer from "components/common/Spacer";
import LanguageSelector from "components/common/LanguageSelector";
import "components/screens/Auth/AuthViewStyle.css";
import TOUButton from "components/common/Button/TOUButton";
import { connect } from "react-redux";
import { register } from "actions/auth.action";
import translate from "i18n/translate";

const SignUpView = (props) => {
  return (
    <div className="authViewStyle" style={{ height: 1000 }}>
      <h1>{translate("SIGN UP")}</h1>
      <div>
        <LanguageSelector />
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
  function onFormSubmit(firstName, lastName, email, password, profileImage) {
    props.register(firstName, lastName, email, password, profileImage);
  }
};

function mapStateToProps(state) {
  const { message } = state.messageReducer;
  return {
    message,
  };
}
export default connect(mapStateToProps, { register })(SignUpView);
