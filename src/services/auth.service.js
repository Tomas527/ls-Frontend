import axios from "axios";

const API_URI = "http://localhost:8080/api/auth/";
class AuthService {
  async login(email, password) {
    const response = await axios.post(API_URI + "signin", {
      email,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(firstName, lastName, email, password) {
    let role = "admin";
    const response = await axios.post(API_URI + "signup", {
      firstName,
      lastName,
      email,
      password,
      role,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
}

export default new AuthService();
