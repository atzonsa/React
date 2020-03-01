import React from "react";

function handlingChange() {
  console.log("changed");
}

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input
        onChange={handlingChange}
        type="checkbox"
        checked={props.item.done}
      />
      <p>{props.item.message}</p>
    </div>
  );
}

export default ToDoItem;
