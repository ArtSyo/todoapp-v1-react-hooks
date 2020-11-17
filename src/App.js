import React, { useState } from "react";
import TodoList from "./todoList/todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "First todo", checked: false },
    { id: 2, title: "Second todo", checked: true },
  ]);

  const [newTask, setNewTask] = useState("");

  const addItemHandler = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: newTask,
          checked: false,
        },
      ]);
      setNewTask("");
    }
  };

  return (
    <div className="container">
      <h1>
        <b>Todo App</b> to do more.
      </h1>
      <div className="input-field">
        <label htmlFor="mainInput">Your Task:</label>
        <input
          type="text"
          name="mainInput"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          onKeyPress={addItemHandler}
        />
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
