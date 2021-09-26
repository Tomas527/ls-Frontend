import React from "react";
import { FormControl, Select } from "@material-ui/core";
import { changeLocalization } from "actions/changeLocalization";
import { connect } from "react-redux";

const LanguageSelector = (props) => {
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
          value={props.selectedLang}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="EN">EN</option>
          <option value="HE">HE</option>
        </Select>
      </FormControl>
    </div>
  );

  function handleChange(newValue) {
    props.changeLocalization(newValue);
  }
};

function mapStateToProps(state) {
  const { selectedLang } = state.localizationReducer;
  return {
    selectedLang,
  };
}

export default connect(mapStateToProps, { changeLocalization })(
  LanguageSelector
);
