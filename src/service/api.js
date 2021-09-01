import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});



const login = axios.create({
  baseURL: "https://luizacodersv2021.herokuapp.com/"
});

login.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});

export {api, login};