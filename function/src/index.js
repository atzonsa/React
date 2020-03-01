import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <ul>
        <li>Unordered List Item 1</li>
        <li>Unordered List Item 2</li>
        <li>Unordered List Item 3</li>
      </ul>
      <ol>
        <li>Ordered List Item 1</li>
        <li>Ordered List Item 2</li>
        <li>Ordered List Item 3</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
