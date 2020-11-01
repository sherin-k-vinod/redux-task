import React, { useEffect, useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import Axios from "./axios";
import { updateProduct } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UpdateForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  //   const newProduct = (product) => dispatch(addProduct(product));
  const editProduct = (product) => dispatch(updateProduct(product));
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");

  // updating new data

  const handleChange = (e) => {
    e.preventDefault();

    editProduct({
      id: selected,
      title: name,
      price: price,
      category: category,
      description: description,
      image: image,
    });

    history.push("/list");
    //
  };

  const products = useSelector((state) => state.products);
  var selected = useSelector((state) => state.selected);
  const [product, setproduct] = useState([]);
  selected += 1;

  useEffect(() => {
    products.map((product) => {
      if (product.id == selected) {
        setproduct(product);
      }
    });
  }, []);

  return (
    <div className="form">
      <h1>edit</h1>
      <form>
        <div className="form_fields">
          <h3>name</h3>
          <input
            type="text"
            value={name}
            placeholder={product.title}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <h3>price</h3>
          <input
            type="text"
            value={price}
            placeholder={product.price}
            onChange={(e) => setprice(e.target.value)}
          ></input>
          <h3>category</h3>
          <input
            type="text"
            value={category}
            placeholder={product.category}
            onChange={(e) => setcategory(e.target.value)}
          ></input>
          <h3>description</h3>
          <input
            type="text"
            value={description}
            placeholder={product.description}
            onChange={(e) => setdescription(e.target.value)}
          ></input>
          <h3>image url</h3>
          <input
            type="text"
            value={image}
            placeholder={product.image}
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

export default UpdateForm;
