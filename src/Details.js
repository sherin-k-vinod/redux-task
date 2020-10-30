import React, { useEffect, useState } from "react";
import "./Details.css";
import { useSelector } from "react-redux";

function Details() {
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
  }, [products]);

  return (
    <div className="details">
      <div>
        <h1>{product.title} </h1>

        <div className="details_info">
          <img
            src={product.id === selected ? product.image : null}
            alt=""
            height="500"
            width="500"
          />
          <div className="details_data">
            <h3>{product.id === selected ? product.category : "category"} </h3>
            <p>$ {product.id === selected ? product.price : "price"} </p>
            <p>
              {product.id === selected ? product.description : "description"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
