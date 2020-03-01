import React from "react";
import "./styles.css";

function handlingClick() {
  console.log("I was clicked");
}

function handlingMouseOver() {
  console.log("Mouse is on me");
}

export default function App() {
  return (
    <div className="App">
      <img
        onMouseOver={handlingMouseOver}
        alt="Murray"
        src="https://www.fillmurray.com/g/200/300"
      />
      <br />
      <br />
      <button onClick={() => console.log("I was clicked")}>Click Me</button>
      <button onClick={handlingClick}>Click Me</button>
    </div>
  );
}
