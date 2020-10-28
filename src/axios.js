import axios from "axios";

const instacnce = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export default instacnce;
