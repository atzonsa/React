import React from "react";
import "./styles.css";

import Product from "./Product";

import productData from "./productData";

export default function App() {
  const components = productData.map(productData => {
    return <Product id={productData.id} product={productData} />;
  });

  return <div>{components}</div>;
}
