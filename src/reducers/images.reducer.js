import { GET_IMAGES, DELETE_IMAGE } from "actions/types";

const initialState = [];

function uploadReducer(profileImages = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_IMAGES:
      return payload;
    case DELETE_IMAGE:
      return profileImages.filter(({ _id }) => _id !== payload.id);
    default:
      return profileImages;
  }
}
export default uploadReducer;
