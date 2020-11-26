import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './todoList/todoList';
import './App.css';

import { Context } from './context';
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos'))
  );

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state), [state]);
  });

  const addItemHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.length >= 1) {
      dispatch({
        type: 'add',
        payload: newTask,
      });
      setNewTask('');
    }
  };

  return (
    <Context.Provider
      value={{
        dispatch,
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
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
