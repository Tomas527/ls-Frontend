import { CHANGE_LOCALIZATION } from "actions/types";

const initialState = { selectedLang: "EN" };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCALIZATION:
      return {
        selectedLang: payload,
      };
    default:
      return state;
  }
}
