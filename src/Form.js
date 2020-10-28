import React, { useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import Axios from "axios";
import { addProduct } from "./redux";
import { useDispatch } from "react-redux";
function Form() {
  const dispatch = useDispatch();
  const newProduct = (product) => dispatch(addProduct(product));
  const [product, setproduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  // !error in handling multi input form
  function handleChange(e) {
    e.preventDefault();
    // setproduct({
    //   name: e.name.value,
    //   price: e.price.value,
    //   category: e.category.value,
    //   description: e.description.value,
    //   image: e.image.value,
    // });
  }

  Axios.post("/product", {
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.image,
  }).then((response) => {
    console.log(response.status);
    // check the status and add data to redux
    newProduct(response.data);
    //or
    newProduct(product);
  });
  return (
    <div className="form">
      <h1>form</h1>
      <form>
        <div className="form_fields">
          <h3>name</h3>
          <input type="text" value={product.name.value}></input>
          <h3>price</h3>
          <input type="text" value={product.price.value}></input>
          <h3>category</h3>
          <input type="text" value={product.category.value}></input>
          <h3>description</h3>
          <input type="text" value={product.description.value}></input>
          <h3>image url</h3>
          <input type="text" value={product.image.value}></input>
          <Button type="submit" onClick={handleChange}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
