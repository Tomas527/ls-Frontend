import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "actions/types";

const initialState = [];

function emploeesReducer(emploees = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEES:
      return payload;
    case CREATE_EMPLOYEE:
      return [...emploees, payload];
    case DELETE_EMPLOYEE:
      return emploees.filter(({ _id }) => _id !== payload.id);
    case UPDATE_EMPLOYEE:
      return emploees.map((emploee) => {
        if (emploee._id === payload._id) {
          return {
            ...emploee,
            ...payload,
          };
        } else {
          return emploee;
        }
      });
    default:
      return emploees;
  }
}

export default emploeesReducer;
