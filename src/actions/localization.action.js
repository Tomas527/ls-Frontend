import { CHANGE_LOCALIZATION } from "actions/types";

export const changeLocalization = (localization) => (dispatch) => {
  const isHe = localization === "HE" ? true : false;
  dispatch({
    type: CHANGE_LOCALIZATION,
    payload: isHe,
  });
};
