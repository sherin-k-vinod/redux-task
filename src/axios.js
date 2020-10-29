import axios from "axios";

const instacnce = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export default instacnce;

//! post
// Axios.post("product", {
//   name: name,
//   price: price,
//   category: category,
//   description: description,
//   image: image,
// }).then((response) => {
//   console.log(response.status);
//   // check the status and add data to redux
// });
