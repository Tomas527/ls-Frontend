/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from "i18n/constants";

export default {
  [LOCALES.HEBREW]: {
    //Sign in
    "PLACEHOLDER FORGOT PASSWORD": "שכחת סיסמא?",
    "LABEL DONT HAVE ACCOUNT": "אין לך חשבון?",

    //Sign Up
    "LABEL PERSONAL DETAILS": "פרטים אישיים",
    "LABEL HAVE ACCOUNT": "יש לך חשבון?",
    "PLACEHOLDER FIRST NAME": "שם פרטי",
    "PLACEHOLDER LAST NAME": "שם משפחה",
    "PLACEHOLDER RETYPE PASSWORD": "אמת סיסמא",
    //both
    "SIGN IN": "התחברות",
    "SIGN UP": "הרשמה",
    "PLACEHOLDER EMAIL": "אימייל",
    "PLACEHOLDER PASSWORD": "סיסמא",

    //validation errors
    "VALIDATION ERROR UPPERCASE REQUIRED":
      "הסיסמא חייבת להכיל אות גדולה באנגלית",
    "VALIDATION ERROR LOWERCASE REQUIRED":
      "הסיסמא חייבת להכיל אות קטנה באנגלית",
    "VALIDATION ERROR NUMBER REQUIRED": "הסיסמא חייבת להכיל מספר",
    "VALIDATION ERROR SPECIAL CHARACTER REQUIRED":
      "הסיסמא חייבת להכיל תו מיוחד",
    "VALIDATION ERROR UNALLOWED CHARACTER": "הוקש תו לא חוקי",
    "VALIDATION ERROR PASSWORD IS TOO SHORT":
      "הסיסמא צריכה להיות ארוכה יותר מ6 תווים",
    "VALIDATION ERROR PASSWORD IS TOO LONG":
      "הסיסמא חייבת להיות קצרה יותר מ32 תווים",
    "VALIDATION ERROR PASSWORDS NOT MATCH": "הסיסמאות שהקשת אינן תואמות",

    //server errors
    "INVALID EMAIL OR PASSWORD": "אימייל או סיסמא שגויים",
    "EMAIL IS ALREADY IN USE": "האימייל שהקשת כבר רשום במערכת",
    "SOMETHING WENT WRONG": "התרחשה תקלה",

    //employees header
    "EMPLOYEES HEADER": "ניהול עובדים",
    "ADD AS EMPLOYEE BUTTON": "+ הוספה כעובד",

    //employee dialog
    "ADD EMPLOYEE HEADER": "הוספת עובד",
    "ADD BUTTON": "הוספה",

    //employees table
    "FIRST NAME": "שם פרטי",
    "LAST NAME": "שם משפחה",
    PHONE: "טלפון",
    ADDRESS: "כתובת מגורים",
    ROLL: "תפקיד",
    "START DATA": "תאריך התחלה",

    //terms of use button
    "BUTTON TERMS OF USE": "תנאי השימוש ומדיניות הפרטיות שלנו",
  },
};
