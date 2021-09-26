import React from "react";
import "./AuthCard.css";

const AuthCard = (props) => {
  const { profileImage, enableImagePicker, centerAllItems } = props;
  return (
    <div className="authCardStyle">
      <div
        className="userIcon"
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      >
        <label
          id="file-upload"
          className="mini compact ui blue circular icon button"
          style={{ cursor: enableImagePicker ? "pointer" : "default" }}
        >
          {enableImagePicker ? (
            <input
              style={{ display: "none" }}
              id="file-upload"
              type="file"
              onChange={props.onFilePicked}
            />
          ) : null}
          <i className="add icon"></i>
        </label>
      </div>
      <div
        className="formStyle"
        style={{
          height: props.height ?? 350,
          alignItems: centerAllItems ? "center" : "flex-start",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default AuthCard;
