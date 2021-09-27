import profileImageService from "services/profileImage.service";
import ProfileImageService from "services/profileImage.service";
import { GET_IMAGES, DELETE_IMAGE } from "./types";

export const deleteImage = (id) => async (dispatch) => {
  try {
    const res = await profileImageService.delete(id);
    dispatch({
      type: DELETE_IMAGE,
      payload: { id },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const getAllProfileImages = () => async (dispatch) => {
  try {
    const res = await ProfileImageService.getAllImages();
    dispatch({ type: GET_IMAGES, payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
