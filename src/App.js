import React, { useState, useEffect } from "react";
import TodoList from "./todoList/todoList";
import "./App.css";

import { Context } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos), [todos]);
  });

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

  const deleteItem = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const checkHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        deleteItem,
        checkHandler,
      }}
    >
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
    </Context.Provider>
  );
}

export default App;
