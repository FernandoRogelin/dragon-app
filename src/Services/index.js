import axios from "axios";

class Client {
  constructor() {
    let baseURL;

    if (process.env.REACT_APP_ENV === "production") {
      baseURL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/";
    } else {
      baseURL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/";
    }

    this.api = axios.create({
      baseURL: baseURL,
      timeout: 60000,
    });

    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default new Client();
