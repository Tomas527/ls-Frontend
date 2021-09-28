import { SET_MESSAGE, CLEAR_MESSAGE } from "actions/types";
import translate from "i18n/translate";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      switch (payload) {
        case "Invalid Email or password":
          return { message: translate("INVALID EMAIL OR PASSWORD") };
        case "Email is already in use":
          return { message: translate("EMAIL IS ALREADY IN USE") };
        default:
          return { message: translate("SOMETHING WENT WRONG") };
      }
    case CLEAR_MESSAGE:
      return { message: undefined };

    default:
      return state;
  }
}
