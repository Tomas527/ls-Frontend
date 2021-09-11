import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./SignInForm.css";
import AuthCard from "../../common/AuthCard/AuthCard";
import Spacer from "../../common/Spacer";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthCard>
      <Spacer />
      <TextField
        className="inputStyle"
        id="standard-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="inputStyle"
        id="standard-password-input"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className="submitButtonStyle"
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Sign In
      </Button>
      <Button color="primary" className="forgotPasswordButtonStyle">
        Forgot password?
      </Button>
    </AuthCard>
  );
  function onSubmit() {
    console.log(email);
    console.log(password);
  }
};

export default SignInForm;
