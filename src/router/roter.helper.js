import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import SignInView from "components/screens/auth/sign in/SignInView";
import SignUpView from "components/screens/auth/sign up/SignUpView";
import EmploeeView from "components/screens/emp/EmploeeView";
import { PrivateRoute } from "router/private.route";
import { PublicRoute } from "router/public.route";
import { history } from "./history";
import { connect } from "react-redux";
import { clearMessage } from "actions/message";
import Spinner from "components/common/Spinner";

const RouterHelper = (props) => {
  useEffect(() => {
    history.listen((location) => {
      console.log("route change detected!");
      props.dispatch(clearMessage());
      console.log(location);
    });
  });
  return props.loading ? (
    <Spinner />
  ) : (
    <Router history={history}>
      <PublicRoute
        isLoggedIn={props.isLoggedIn}
        path="/"
        exact
        component={SignInView}
      />
      <PublicRoute
        isLoggedIn={props.isLoggedIn}
        path="/signup"
        exact
        component={SignUpView}
      />
      <PrivateRoute
        isLoggedIn={props.isLoggedIn}
        path="/profile"
        exact
        component={EmploeeView}
      />
    </Router>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { loading } = state.auth;
  return {
    isLoggedIn,
    loading,
  };
}

export default connect(mapStateToProps)(RouterHelper);
