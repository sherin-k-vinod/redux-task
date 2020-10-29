import React, { useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import Axios from "axios";
import { addProduct } from "./redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const newProduct = (product) => dispatch(addProduct(product));
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const handleChange = (e) => {
    e.preventDefault();

    newProduct({
      name: name,
      price: price,
      category: category,
      description: description,
      image: image,
    });

    // Axios.post("product", {
    //   name: name,
    //   price: price,
    //   category: category,
    //   description: description,
    //   image: image,
    // }).then((response) => {
    //   console.log(response.status);
    // check the status and add data to redux
    //
    //   });
  };

  return (
    <div className="form">
      <h1>form</h1>
      <form>
        <div className="form_fields">
          <h3>name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <h3>price</h3>
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          ></input>
          <h3>category</h3>
          <input
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          ></input>
          <h3>description</h3>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></input>
          <h3>image url</h3>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          ></input>
          <Button type="submit" onClick={handleChange}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
