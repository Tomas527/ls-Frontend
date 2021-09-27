import { CHANGE_LOCALIZATION } from "actions/types";

export const changeLocalization = (localization) => (dispatch) => {
  dispatch({
    type: CHANGE_LOCALIZATION,
    payload: localization,
  });
};
