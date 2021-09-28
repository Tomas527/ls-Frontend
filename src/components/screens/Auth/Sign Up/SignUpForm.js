import AuthCard from "components/common/AuthCard/AuthCard";
import BasicButton from "components/common/Button/BasicButton";
import BasicInput from "components/common/Input/BasicInput";
import PasswordInput from "components/common/Input/PasswordInput";
import translate from "i18n/translate";
import imagePlaceholder from "assets/user-icon.png";

import {
  emailIsValid,
  errorDescriptionForPassword,
} from "components/common/Input/Validations";
import Spacer from "components/common/Spacer";

import React, { useState } from "react";
import ErrorLabel from "components/common/ErrorLabel";
const SignUpForm = ({ onSubmit, errorMessage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [inputsDidChange, setInputsDidChange] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const passwordErrorText = errorDescriptionForPassword(password1);

  function handleFilePicking(e) {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div>
      <AuthCard
        height={580}
        onFilePicked={handleFilePicking}
        profileImage={profileImage ? profileImage : imagePlaceholder}
        enableImagePicker={true}
      >
        <p>{translate("LABEL PERSONAL DETAILS")}</p>
        <BasicInput
          isRequired
          placeholder={translate("PLACEHOLDER FIRST NAME")}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setFirstName(val);
          }}
        />
        <BasicInput
          isRequired
          placeholder={translate("PLACEHOLDER LAST NAME")}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            if (!inputsDidChange) setInputsDidChange(true);
            setLastName(val);
          }}
        />
        <BasicInput
          isRequired
          placeholder={translate("PLACEHOLDER EMAIL")}
          errored={errorMessage !== undefined && !inputsDidChange}
          onChange={(val) => {
            setEmail(val);
            if (!inputsDidChange) setInputsDidChange(true);
          }}
          validateEmail={true}
        />
        <Spacer />
        <p>{translate("PLACEHOLDER PASSWORD")}</p>
        <PasswordInput
          placeholder={translate("PLACEHOLDER PASSWORD")}
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
          placeholder={translate("PLACEHOLDER RETYPE PASSWORD")}
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
              ? translate("VALIDATION ERROR PASSWORDS NOT MATCH")
              : null
          }
        />
        <Spacer height={1} />
        <BasicButton
          text={translate("SIGN UP")}
          onClick={() =>
            onSubmit(
              firstName,
              lastName,
              email,
              password1,
              profileImage ? profileImage : imagePlaceholder
            )
          }
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
