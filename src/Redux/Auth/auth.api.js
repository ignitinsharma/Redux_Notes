import axios from "axios";

export const loginAPI = async (creds) => {
  let data = await axios.post("https://reqres.in/api/login", creds); // IN cred we get login input details which come from login page
  console.log("data api", data);
  return data.data;
};
