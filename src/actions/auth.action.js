import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  LOADING_ON,
} from "./types.js";

import AuthService from "services/auth.service.js";
import ProfileImageService from "services/profileImage.service";

export const register =
  (firstName, lastName, email, password, image) => async (dispatch) => {
    dispatch({ type: LOADING_ON });
    try {
      const res = await AuthService.register(
        firstName,
        lastName,
        email,
        password
      );
      let file = await fetch(image).then((r) => r.blob());
      await ProfileImageService.upload(file, res.id);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: res },
      });

      dispatch({
        type: SET_MESSAGE,
      });
      return Promise.resolve();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  try {
    await AuthService.login(email, password).then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
