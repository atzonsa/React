import React from "react";
import "./styles.css";

import Product from "./Product";

import productData from "./productData";

export default function App() {
  const components = productData.map(productData => {
    return (
      <Product
        id={productData.id}
        name={productData.name}
        price={productData.price}
        description={productData.description}
      />
    );
  });

  return <div>{components}</div>;
}
