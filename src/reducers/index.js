import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import messageReducer from "./message.reducer";
import emploeesReducer from "./emploee.reducer";
import localizationReducer from "./localization.reducer";
import profileImagesReducer from "./images.reducer";

export default combineReducers({
  authReducer,
  messageReducer,
  emploeesReducer,
  profileImagesReducer,
  localizationReducer,
});
