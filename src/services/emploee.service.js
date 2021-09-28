import axios from "axios";
import authHeader from "./auth-header";

const API_URI = "http://localhost:8080/api/emploees";
class EmploeeDataService {
  async getAll() {
    const response = await axios.get(API_URI, { headers: authHeader() });
    return response;
  }

  delete(id) {
    return axios.delete(`${API_URI}/${id}`, { headers: authHeader() });
  }
  async update(id, data) {
    const response = await axios.put(`${API_URI}/${id}`, data, {
      headers: authHeader(),
    });
    return response;
  }
}

export default new EmploeeDataService();
