import { CHANGE_LOCALIZATION } from "actions/types";

const initialState = { isHe: localStorage.getItem("prefferedLangIsHebrew") };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCALIZATION:
      localStorage.setItem("prefferedLangIsHebrew", payload);
      return {
        isHe: payload,
      };
    default:
      return state;
  }
}
