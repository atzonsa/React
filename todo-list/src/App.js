import React from "react";
import "./styles.css";

import ToDoItem from "./ToDoItem";

export default function App() {
  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}
