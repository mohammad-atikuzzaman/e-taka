import axios from "axios";

const ublic = axios.create({
  baseURL: "http://localhost:3000",
});
const axiosPublic = () => {
 return ublic
};

export default axiosPublic;