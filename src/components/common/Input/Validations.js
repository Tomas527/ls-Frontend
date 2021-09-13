import {
  VALIDATION_ERROR_UPPERCASE_REQUIRED,
  VALIDATION_ERROR_NUMBER_REQUIRED,
  VALIDATION_ERROR_LOWERCASE_REQUIRED,
  VALIDATION_ERROR_SPECIAL_CHARACTER_REQUIRED,
  VALIDATION_ERROR_PASSWORD_IS_TOO_LONG,
  VALIDATION_ERROR_PASSWORD_IS_TOO_SHORT,
} from "Constants.js";

export function emailIsValid(email) {
  if (email == null || email === "") {
    return true;
  }
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

export function errorDescriptionForPassword(password) {
  if (password == null || password === "") {
    return null;
  } else {
    const stringPassword = String(password);
    if (!stringPassword.match("(?=.*[A-Z])")) {
      return VALIDATION_ERROR_UPPERCASE_REQUIRED;
    }
    if (!stringPassword.match("(?=.*[0-9])")) {
      return VALIDATION_ERROR_NUMBER_REQUIRED;
    }
    if (!stringPassword.match("(?=.*[a-z])")) {
      return VALIDATION_ERROR_LOWERCASE_REQUIRED;
    }
    if (!stringPassword.match("(?=.*[!@#$%^&*])")) {
      return VALIDATION_ERROR_SPECIAL_CHARACTER_REQUIRED;
    }
    if (String(password).length < 6) {
      return VALIDATION_ERROR_PASSWORD_IS_TOO_SHORT;
    }
    if (String(password).length > 32) {
      return VALIDATION_ERROR_PASSWORD_IS_TOO_LONG;
    }
    return null;
  }
}
