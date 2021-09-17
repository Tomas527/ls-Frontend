import React, { useState } from "react";
import AuthCard from "components/common/AuthCard/AuthCard";
import BasicInput from "components/common/Input/BasicInput";
import PasswordInput from "components/common/Input/PasswordInput";
import BasicButton from "components/common/Button/BasicButton";
import "./SignInForm.css";
import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_FORGOT_PASSWORD,
  PLACEHOLDER_PASSWORD,
  SIGN_IN,
} from "constants/uiConstants";
import TextButton from "components/common/Button/TextButton";
import ErrorLabel from "components/common/ErrorLabel";

const SignInForm = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputsDidChange, setInputsDidChange] = useState(false);
  return (
    <div className="signInFormStyle">
      <AuthCard centerAllItems={true}>
        <BasicInput
          placeholder={PLACEHOLDER_EMAIL}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setEmail(val);
          }}
          errored={errorMessage !== undefined && !inputsDidChange}
        />
        <PasswordInput
          placeholder={PLACEHOLDER_PASSWORD}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setPassword(val);
          }}
          errored={errorMessage !== undefined && !inputsDidChange}
        />

        <div style={{ alignSelf: "flex-start" }}>
          <ErrorLabel errorText={!inputsDidChange ? errorMessage : ""} />
        </div>
        <BasicButton
          text={SIGN_IN}
          onClick={() => onSubmit(email, password)}
          isDisabled={!formIsValid()}
        />
        <TextButton
          buttonText={PLACEHOLDER_FORGOT_PASSWORD}
          onClick={() => console.log("reset user password")}
          blueText={true}
        />
      </AuthCard>
    </div>
  );
  function formIsValid() {
    if (email === "" || password === "") {
      return false;
    } else {
      return true;
    }
  }
};

export default SignInForm;
