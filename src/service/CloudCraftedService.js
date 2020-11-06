import axios from "axios";

class CloudCraftedService {
  authenticateCredentials(body) {
    return axios.post("http://localhost:5000/login", body);
  }

  getAllBlogs() {
    return axios.get("http://localhost:5000/home/");
  }

  postUserBlog(body, id) {
    return axios.post(`http://localhost:5000/create/${id}`, body);
  }
}

export default CloudCraftedService;
