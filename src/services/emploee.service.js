import axios from "axios";

const API_URI = "http://localhost:8080/api/emploees";
class EmploeeDataService {
  async getAll() {
    const response = await axios.get(API_URI);
    return response;
  }

  delete(id) {
    return axios.delete(`${API_URI}/${id}`);
  }
  async update(id, data) {
    const response = await axios.put(`${API_URI}/${id}`, data);
    return response;
  }
  find(id) {
    return axios.get(`${API_URI}/${id}`);
  }
  create(data) {
    return axios.post(API_URI, data);
  }
}

export default new EmploeeDataService();
