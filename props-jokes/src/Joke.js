import React from "react";

export default function Joke(props) {
  return (
    <div>
      <h3 style={{ display: props.question ? "block" : "none" }}>
        Question:{props.question}
      </h3>
      <h3 style={{ color: props.question ? "black" : "grey" }}>
        Answer:{props.answer}
      </h3>
    </div>
  );
}
