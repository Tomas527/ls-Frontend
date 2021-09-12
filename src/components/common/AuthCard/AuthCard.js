import React from "react";
import "./AuthCard.css";

const AuthCard = (props) => {
  return (
    <div className="cardStyle">
      <div className="userIcon">
        <button className="mini compact ui blue circular icon button">
          <i className="add icon"></i>
        </button>
      </div>
      <div className="formStyle">{props.children}</div>
    </div>
  );
};

export default AuthCard;
