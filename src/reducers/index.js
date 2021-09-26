import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import emploeesReducer from "./emploeeReducer";
import localizationReducer from "./localizationReducer";
import profileImagesReducer from "./profileImagesReducer";

export default combineReducers({
  auth,
  message,
  emploeesReducer,
  profileImagesReducer,
  localizationReducer,
});
