import axios from "axios";

class CloudCraftedService {
  constructor(params) {
    if (params) {
      this.instance = axios.create({
        headers: params.headers
          ? params.headers
          : {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
      });
    } else this.instance = axios;
  }
  authenticateCredentials(body) {
    console.log(body, "reporting body from service in UI");
    return this.instance.post("http://localhost:5000/ccb/login", body);
  }

  getAllBlogs() {
    return this.instance.get("http://localhost:5000/ccb/home");
  }

  postUserBlog(body, id, params) {
    console.log(body, "body from the ui service");
    return this.instance.post(
      `http://localhost:5000/ccb/create/${id}`,
      body,
      params
    );
  }

  postData(data) {
    console.log(data, "data hitting the front end service");
    return this.instance.post("http://localhost:5000/ccb/aam", data);
  }
}

export default CloudCraftedService;
