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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    //console.log("Changed", id)

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(arr => {
        if (arr.id === id) {
          arr.done = !arr.done;
        }
        return arr;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const components = this.state.todos.map(todoData => {
      return (
        <ToDoItem
          key={todoData.id}
          item={todoData}
          handleChange={this.handleChange}
        />
      );
    });

    return <div className="todo-list">{components}</div>;
  }
}
