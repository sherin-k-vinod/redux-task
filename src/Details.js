import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";

function Details() {
  const product = useSelector((state) => state.products);
  const selected = useSelector((state) => state.selected);
  console.log(selected);
  return (
    <div className="details">
      <h1>{product[selected]?.title} </h1>

      <div className="details_info">
        <img src={product[selected]?.image} alt="" height="500" width="500" />
        <div className="details_data">
          <h3>{product[selected]?.category} </h3>
          <p>$ {product[selected]?.price} </p>
          <p>{product[selected]?.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
