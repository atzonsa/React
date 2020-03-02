import React from "react";

export default function Conditional(props) {
  console.log(props.isLoading);

  return (
    <div>
      <h1>Navbar</h1>

      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Data loaded successfully!!!!!</h1>
      )}

      <h1>Footer</h1>
    </div>
  );
}
