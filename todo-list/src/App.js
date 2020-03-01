import React from "react";
import "./styles.css";

import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  render() {
    const components = this.state.todos.map(todoData => {
      return <ToDoItem id={todoData.id} item={todoData} />;
    });

    return <div className="todo-list">{components}</div>;
  }
}
