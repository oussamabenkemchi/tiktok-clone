import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-with-mern.herokuapp.com/",
});

export default instance;
