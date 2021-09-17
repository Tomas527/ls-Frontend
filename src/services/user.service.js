import axios from "axios";
import authHeader from "./auth-header";

const API_URI = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URI + "all");
  }
  getWatcherBoard = () => {
    return axios.get(API_URI + "watcher", { headers: authHeader() });
  };
  getAdminBoard = () => {
    return axios.get(API_URI + "admin", { headers: authHeader() });
  };
}

export default new UserService();

// const getPublicContent = () => {
//   return axios.get(API_URI + "all");
// };
// const getWatcherBoard = () => {
//   return axios.get(API_URI + "watcher", { headers: authHeader() });
// };
// const getAdminBoard = () => {
//   return axios.get(API_URI + "admin", { headers: authHeader() });
// };

// export { getPublicContent, getWatcherBoard, getAdminBoard };
