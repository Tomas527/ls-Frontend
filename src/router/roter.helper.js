import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import SignInView from "components/screens/auth/SignIn/SignInView";
import SignUpView from "components/screens/auth/SignUp/SignUpView";
import EmploeeView from "components/screens/emploees/EmployeesView";
import { PrivateRoute } from "router/private.route";
import { PublicRoute } from "router/public.route";
import { history } from "./history";
import { connect } from "react-redux";
import { clearMessage } from "actions/message.action";
import Spinner from "components/common/Spinner";

const RouterHelper = (props) => {
  useEffect(() => {
    history.listen(() => {
      props.dispatch(clearMessage());
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
  const { isLoggedIn, loading } = state.authReducer;
  return {
    isLoggedIn,
    loading,
  };
}

export default connect(mapStateToProps)(RouterHelper);
