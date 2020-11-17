import React, { useContext } from "react";
import { Context } from "../context";

const TodoItem = ({ id, title, checked }) => {
  const { deleteItem, checkHandler } = useContext(Context);

  const classList = ["todo"];

  if (checked) {
    classList.push("completed");
  }

  return (
    <li className={classList.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkHandler(id)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => deleteItem(id)}>
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
