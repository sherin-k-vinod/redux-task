import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";

function Details(props) {
  const product = useSelector((state) => state.products);
  const id = props.location.idProp;
  return (
    <div className="details">
      <h1>{product[id]?.title} </h1>

      <div className="details_info">
        <img src={product[id].image} alt="" height="500" width="500" />
        <div className="details_data">
          <h3>{product[id].category} </h3>
          <p>{product[id].price} </p>
          <p>{product[id].description} </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
