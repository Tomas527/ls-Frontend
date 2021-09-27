import {
  GET_EMPLOYEES,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./types";
import EmploeeDataService from "services/emploee.service";

export const getAllEmployees = () => async (dispatch) => {
  try {
    const res = await EmploeeDataService.getAll();
    dispatch({ type: GET_EMPLOYEES, payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createEmployee =
  (firstName, lastName, phone, address, roll) => async (dispatch) => {
    try {
      const res = await EmploeeDataService.create({
        firstName,
        lastName,
        phone,
        address,
        roll,
      });
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const updateEmployee = (id, data) => async (dispatch) => {
  try {
    const res = await EmploeeDataService.update(id, data);
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    const res = await EmploeeDataService.delete(id);
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: { id },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
