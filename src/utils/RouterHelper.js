import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignInView from "components/screens/Auth/Sign In/SignInView";
import SignUpView from "components/screens/Auth/Sign Up/SignUpView";

const RouterHelper = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignInView} />
      <Route path="/signup" exact component={SignUpView} />
    </BrowserRouter>
  );
};

export default RouterHelper;
