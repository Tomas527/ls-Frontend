import axios from "axios";

const API_URI = "http://localhost:8080/api/auth/";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URI + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(firstName, lastName, email, password) {
    let role = "admin";
    return axios
      .post(API_URI + "signup", {
        firstName,
        lastName,
        email,
        password,
        role,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
}

export default new AuthService();
