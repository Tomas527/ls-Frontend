import translate from "i18n/translate";

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
      return translate("VALIDATION ERROR UPPERCASE REQUIRED");
    }
    if (!stringPassword.match("(?=.*[0-9])")) {
      return translate("VALIDATION ERROR NUMBER REQUIRED");
    }
    if (!stringPassword.match("(?=.*[a-z])")) {
      return translate("VALIDATION ERROR LOWERCASE REQUIRED");
    }
    if (!stringPassword.match("(?=.*[!@#$%^&*])")) {
      return translate("VALIDATION ERROR SPECIAL CHARACTER REQUIRED");
    }
    if (String(password).length < 6) {
      return translate("VALIDATION ERROR PASSWORD IS TOO SHORT");
    }
    if (String(password).length > 32) {
      return translate("VALIDATION ERROR PASSWORD IS TOO LONG");
    }
    return null;
  }
}
