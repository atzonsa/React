import React from "react";

function Product(props) {
  return (
    <div>
      <h2>Product Name: {props.product.name}</h2>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}

export default Product;
