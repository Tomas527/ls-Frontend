import axios from "axios";

const API_URI = "http://localhost:8080/api/emploees";
class EmploeeDataService {
  getAll() {
    return axios.get(API_URI).then((response) => {
      return response;
    });
  }

  delete(id) {
    return axios.delete(`${API_URI}/${id}`);
  }
  update(id, data) {
    return axios.put(`${API_URI}/${id}`, data).then((response) => {
      return response;
    });
  }
  find(id) {
    return axios.get(`${API_URI}/${id}`);
  }
  create(data) {
    return axios.post(API_URI, data);
  }
}

export default new EmploeeDataService();
