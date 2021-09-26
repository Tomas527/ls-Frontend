import { CHANGE_LOCALIZATION } from "actions/types";

// export const setLangEn = () => (dispatch) => {
//   dispatch({
//     type: SET_LOCALIZATION_EN,
//   });
// };
// export const setLangHE = () => (dispatch) => {
//   dispatch({
//     type: SET_LOCALIZATION_HE,
//   });
// };

export const changeLocalization = (localization) => (dispatch) => {
  dispatch({
    type: CHANGE_LOCALIZATION,
    payload: localization,
  });
};
