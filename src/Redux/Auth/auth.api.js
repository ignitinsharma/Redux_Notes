import axios from "axios";

export const loginAPI = async (creds) => {
  let data = axios.post("https://reqres.in/api/login", creds);
  data = await data.data;
  return data;
};
