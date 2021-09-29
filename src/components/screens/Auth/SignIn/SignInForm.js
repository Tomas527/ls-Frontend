import React, { useState } from "react";
import AuthCard from "components/common/AuthCard/AuthCard";
import BasicInput from "components/common/Input/BasicInput";
import PasswordInput from "components/common/Input/PasswordInput";
import BasicButton from "components/common/Button/BasicButton";
import "./SignInForm.css";

import TextButton from "components/common/Button/TextButton";
import ErrorLabel from "components/common/ErrorLabel";
import imagePlaceholder from "assets/user-icon.png";
import translate from "i18n/translate";

const SignInForm = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputsDidChange, setInputsDidChange] = useState(false);
  return (
    <div className="signInFormStyle">
      <AuthCard centerAllItems={true} profileImage={imagePlaceholder}>
        <BasicInput
          placeholder={translate("PLACEHOLDER EMAIL")}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setEmail(val);
          }}
          errored={errorMessage !== undefined && !inputsDidChange}
        />
        <PasswordInput
          placeholder={translate("PLACEHOLDER PASSWORD")}
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
          text={translate("SIGN IN")}
          onClick={() => onSubmit(email, password)}
          isDisabled={!formIsValid()}
        />
        <TextButton
          buttonText={translate("PLACEHOLDER FORGOT PASSWORD")}
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
