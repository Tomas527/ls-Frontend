/* eslint-disable import/no-anonymous-default-export */

import { LOCALES } from "i18n/constants";

export default {
  [LOCALES.ENGLISH]: {
    //Sign in
    "PLACEHOLDER FORGOT PASSWORD": "Forgot password?",
    "LABEL DONT HAVE ACCOUNT": "Don't have an account?",

    //Sign Up
    "LABEL PERSONAL DETAILS": "Personal Details",
    "LABEL HAVE ACCOUNT": "Have an account?",
    "PLACEHOLDER FIRST NAME": "First Name",
    "PLACEHOLDER LAST NAME": "Last Name",
    "PLACEHOLDER RETYPE PASSWORD": "Retype Password",
    //both
    "SIGN IN": "Sign In",
    "SIGN UP": "Sign Up",
    "PLACEHOLDER EMAIL": "Email",
    "PLACEHOLDER PASSWORD": "Password",
    //validation errors
    "VALIDATION ERROR UPPERCASE REQUIRED":
      "Password must contain at least one uppercase letter",
    "VALIDATION ERROR LOWERCASE REQUIRED":
      "Password must contain at least one lowercase letter",
    "VALIDATION ERROR NUMBER REQUIRED":
      "Password must contain at least one number",
    "VALIDATION ERROR SPECIAL CHARACTER REQUIRED":
      "Password must contain at least one special character",
    "VALIDATION ERROR UNALLOWED CHARACTER": "Illegal characters used",
    "VALIDATION ERROR PASSWORD IS TOO SHORT":
      "Password must be longer then 6 characters",
    "VALIDATION ERROR PASSWORD IS TOO LONG":
      "Password can not be longer than 32 characters",
    "VALIDATION ERROR PASSWORDS NOT MATCH":
      "The passwords you entered does not match",

    //server errors
    "INVALID EMAIL OR PASSWORD": "Invalid Email or password",
    "EMAIL IS ALREADY IN USE": "Email is already in use",
    "SOMETHING WENT WRONG": "Something went wrong",

    //employees header
    "EMPLOYEES HEADER": "Manageing Employees",
    "ADD AS EMPLOYEE BUTTON": "+ Add As Employee",

    //employee dialog
    "ADD EMPLOYEE HEADER": "Add Employee",
    "ADD BUTTON": "Add",

    //employees table
    "FIRST NAME": "First Name",
    "LAST NAME": "Last Name",
    PHONE: "Phone",
    ADDRESS: "Address",
    ROLL: "Roll",
    "START DATA": "Start Date",

    //terms of use button
    "BUTTON TERMS OF USE": "Our Terms of Use and Privacy Policy",
  },
};
