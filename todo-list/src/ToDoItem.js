import React from "react";

function ToDoItem(props) {
  const styles = props.item.done
    ? {
        fontStyle: "Italic",
        textDecoration: "line-through",
        color: "lightgrey"
      }
    : {};

  return (
    <div className="todo-item">
      <input
        onChange={() => props.handleChange(props.item.id)}
        type="checkbox"
        checked={props.item.done}
      />
      <p style={styles}>{props.item.message}</p>
    </div>
  );
}

export default ToDoItem;
