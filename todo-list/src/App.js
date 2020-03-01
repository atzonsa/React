import React from "react";
import "./styles.css";

import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

export default function App() {
  const components = todoData.map(todoData => {
    return <ToDoItem id={todoData.id} item={todoData} />;
  });

  return <div className="todo-list">{components}</div>;
}
