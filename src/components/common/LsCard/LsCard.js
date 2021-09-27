import React from "react";
import logo from "assets/logo.png";
import Spacer from "../Spacer";
import { connect } from "react-redux";
import "./LsCard.css";
import UserDashboard from "./UserDashboard";
import { logout } from "actions/auth.action";

const LsCard = (props) => {
  const { user, isLoggedIn, profileImagesReducer } = props;
  return (
    <div>
      <div className="lsCardStyle">
        <img src={logo} width={190} height={50} alt="" />
        {isLoggedIn && (
          <UserDashboard
            userName={user.firstName + " " + user.lastName}
            handleLogout={() => props.logout()}
            profileImage={
              profileImagesReducer.length === 0
                ? null
                : profileImagesReducer.find((image) => image._id === user.id)
            }
          />
        )}
      </div>
      <Spacer height={4} />
      {props.children}
    </div>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.authReducer;
  const { profileImagesReducer } = state;
  return { isLoggedIn, user, profileImagesReducer };
}

export default connect(mapStateToProps, { logout })(LsCard);
