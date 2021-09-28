import React from "react";
import { FormControl, Select } from "@material-ui/core";
import { changeLocalization } from "actions/localization.action";
import { connect } from "react-redux";

const LanguageSelector = (props) => {
  const { isHe } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <FormControl
        variant="outlined"
        color="primary"
        style={{ backgroundColor: "white" }}
      >
        <Select
          native
          value={isHe ? "HE" : "EN"}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="EN">En</option>
          <option value="HE">עב</option>
        </Select>
      </FormControl>
    </div>
  );

  function handleChange(newValue) {
    props.changeLocalization(newValue);
  }
};

function mapStateToProps(state) {
  const { isHe } = state.localizationReducer;
  return {
    isHe,
  };
}

export default connect(mapStateToProps, { changeLocalization })(
  LanguageSelector
);
