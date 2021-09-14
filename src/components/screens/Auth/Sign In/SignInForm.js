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
} from "Constants";
import TextButton from "components/common/Button/TextButton";

const SignInForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signInFormStyle">
      <AuthCard centerAllItems={true}>
        <BasicInput
          placeholder={PLACEHOLDER_EMAIL}
          onChange={(val) => setEmail(val)}
          // validateEmail={true}
        />
        <PasswordInput
          placeholder={PLACEHOLDER_PASSWORD}
          onChange={(val) => setPassword(val)}
          // validatePassword={true}
        />
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
