import { Button } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./List.css";
import { selectProduct, deleteProduct } from "./redux";

function List() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const newSelected = (id) => dispatch(selectProduct(id));
  const deleteProd = (id) => dispatch(deleteProduct(id));
  const selected = useSelector((state) => state.selected);
  const history = useHistory();
  console.log(selected);
  const deleteitem = (id) => {
    deleteitem(id);
  };
  return (
    <div className="list">
      <h1>List</h1>
      {products.map((product) => (
        <div className="list_items" id={product.id}>
          <img src={product?.image} alt="" height="150" width="150" />
          <div className="item_details">
            <h4>{product?.title}</h4>
            <small>$ {product?.price}</small>
            <p>{product?.category}</p>
          </div>
          <div className="list_buttons">
            <Button
              onClick={() => {
                newSelected(product.id);
                history.push("/details");
              }}
            >
              Details
            </Button>

            <Button
              onClick={() => {
                deleteProd(product.id);
              }}
            >
              Delete
            </Button>
            <Button>Update</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
