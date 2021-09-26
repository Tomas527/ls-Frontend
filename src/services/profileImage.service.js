import axios from "axios";

const API_URI = "http://localhost:8080/profileImages";

class ProfileImageService {
  async upload(image, id) {
    var data = new FormData();
    data.append("id", id);
    data.append("file", image);
    var config = {
      method: "post",
      url: "http://localhost:8080/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    try {
      const res = await axios(config);
      return Promise.resolve(res);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getAllImages() {
    return axios.get(API_URI).then((response) => {
      return response;
    });
  }

  delete(id) {
    return axios.delete(`${API_URI}/${id}`);
  }
}

export default new ProfileImageService();
