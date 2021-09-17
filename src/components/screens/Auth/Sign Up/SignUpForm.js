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
} from "constants/uiConstants";
import React, { useState } from "react";
import ErrorLabel from "components/common/ErrorLabel";
const SignUpForm = ({ onSubmit, errorMessage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [inputsDidChange, setInputsDidChange] = useState(false);
  const passwordErrorText = errorDescriptionForPassword(password1);

  return (
    <div>
      <AuthCard height={580}>
        <p>{LABEL_PERSONAL_DETAILS}</p>
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_FIRST_NAME}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setFirstName(val);
          }}
        />
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_LAST_NAME}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setLastName(val);
          }}
        />
        <BasicInput
          isRequired
          placeholder={PLACEHOLDER_EMAIL}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            setEmail(val);
            if (!inputsDidChange) setInputsDidChange(true);
          }}
          validateEmail={true}
        />
        <Spacer />
        <p>{PLACEHOLDER_PASSWORD}</p>
        <PasswordInput
          placeholder={PLACEHOLDER_PASSWORD}
          onChange={(val) => {
            setPassword1(val);
            if (!inputsDidChange) setInputsDidChange(true);
          }}
          errored={
            passwordErrorText !== null ||
            (errorMessage !== undefined && !inputsDidChange)
          }
        />
        <PasswordInput
          placeholder={PLACEHOLDER_RETYPE_PASSWORD}
          onChange={(val) => {
            setPassword2(val);
            if (!inputsDidChange) setInputsDidChange(true);
          }}
          errored={
            (password2 !== "" && password2 !== password1) ||
            (errorMessage !== undefined && !inputsDidChange)
          }
        />
        <ErrorLabel
          errorText={
            errorMessage !== undefined && !inputsDidChange
              ? errorMessage
              : passwordErrorText !== null
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
          onClick={() => onSubmit(firstName, lastName, email, password1)}
          isDisabled={!formIsValid()}
        />
      </AuthCard>
    </div>
  );
  function formIsValid() {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password1 === "" ||
      password1 !== password2 ||
      passwordErrorText !== null ||
      !emailIsValid(email)
    ) {
      return false;
    } else {
      return true;
    }
  }
};

export default SignUpForm;
