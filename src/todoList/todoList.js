import React from "react";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((elem) => (
        <TodoItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};

export default TodoList;
