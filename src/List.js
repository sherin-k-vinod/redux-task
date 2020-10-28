import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Details from "./Details";
import "./List.css";
function List() {
  const products = useSelector((state) => state.products);
  const [selected, setselected] = useState();
  useEffect(() => {
    if (selected) {
      <Details id={selected} />;
    }
    return () => {
      setselected("");
    };
  }, [selected]);
  console.log(selected);
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
            {/* <Link
              to={{
                pathname: "/details",
                idProp: { id: product.id },
              }}
            > */}
            <Button>Details</Button>
            {/* </Link> */}

            <Button>Delete</Button>
            <Button>Update</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
