import React from "react";

function Product(props) {
  return (
    <div>
      <h2>Product Name: {props.name}</h2>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default Product;
