import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./SignInForm.css";
import AuthCard from "components/common/AuthCard/AuthCard";
import Spacer from "components/common/Spacer";
import BasicInput from "components/common/Input/BasicInput";
import PasswordInput from "components/common/Input/PasswordInput";
import BasicButton from "components/common/Button/BasicButton";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthCard>
      <Spacer />
      <BasicInput
        placeholder="Email"
        onChange={(val) => setEmail(val)}
        // validateEmail={true}
      />
      <PasswordInput
        placeholder="Password"
        onChange={(val) => setPassword(val)}
        // validatePassword={true}
      />
      <BasicButton
        text="Sign In"
        onClick={onSubmit}
        isDisabled={!formIsValid()}
      />
      <Button color="primary" className="forgotPasswordButtonStyle">
        Forgot password?
      </Button>
    </AuthCard>
  );
  function onSubmit() {
    console.log(email);
    console.log(password);
  }
  function formIsValid() {
    if (email === "" || password === "") {
      return false;
    } else {
      return true;
    }
  }
};

export default SignInForm;
