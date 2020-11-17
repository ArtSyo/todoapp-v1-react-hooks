import React, { useState } from "react";
import TodoList from "./todoList/todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "First todo", checked: false },
    { id: 2, title: "Second todo", checked: true },
  ]);

  return (
    <div className="container">
      <h1><b>Todo App</b> to do more.</h1>
      <div className="input-field">
        <label htmlFor="mainInput">Your Task:</label>
        <input type="text" name="mainInput" />
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
