import AuthCard from "components/common/AuthCard/AuthCard";
import BasicButton from "components/common/Button/BasicButton";
import BasicInput from "components/common/Input/BasicInput";
import PasswordInput from "components/common/Input/PasswordInput";
import {
  emailIsValid,
  errorDescriptionForPassword,
} from "components/common/Input/Validations";
import Spacer from "components/common/Spacer";
import {
  LABEL_PERSONAL_DETAILS,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_LAST_NAME,
  PLACEHOLDER_PASSWORD,
  PLACEHOLDER_RETYPE_PASSWORD,
  SIGN_UP,
  VALIDATION_ERROR_PASSWORDS_NOT_MATCH,
} from "Constants";
import React, { useState } from "react";
import ErrorLabel from "./components/ErrorLabel";
const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const passwordErrorText = errorDescriptionForPassword(password1);

  return (
    <div>
      <AuthCard height={580}>
        <p>{LABEL_PERSONAL_DETAILS}</p>
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_FIRST_NAME}
          onChange={(val) => setFirstName(val)}
        />
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_LAST_NAME}
          onChange={(val) => setLastName(val)}
        />
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_EMAIL}
          onChange={(val) => setEmail(val)}
          validateEmail={true}
        />
        <Spacer />
        <p>{PLACEHOLDER_PASSWORD}</p>
        <PasswordInput
          placeholder={PLACEHOLDER_PASSWORD}
          onChange={(val) => setPassword1(val)}
          errored={passwordErrorText !== null}
        />
        <PasswordInput
          placeholder={PLACEHOLDER_RETYPE_PASSWORD}
          onChange={(val) => setPassword2(val)}
          errored={password2 !== "" && password2 !== password1}
        />
        <ErrorLabel
          errorText={
            passwordErrorText !== null
              ? passwordErrorText
              : password2 === ""
              ? null
              : password1 !== password2
              ? VALIDATION_ERROR_PASSWORDS_NOT_MATCH
              : null
          }
        />
        <Spacer height={1} />
        <BasicButton
          text={SIGN_UP}
          onClick={() => console.log("submit form")}
          isDisabled={!formIsValid()}
        />
      </AuthCard>
    </div>
  );
  function formIsValid() {
    if (
      firstName === "" ||
      lastName === "" ||
      !emailIsValid(email) ||
      email === "" ||
      passwordErrorText !== null ||
      password1 === "" ||
      password1 !== password2
    ) {
      return false;
    } else {
      return true;
    }
  }
};

export default SignUpForm;
