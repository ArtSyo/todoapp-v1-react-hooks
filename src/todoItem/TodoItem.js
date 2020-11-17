import React, { useState } from "react";

const TodoItem = ({ id, title, checked }) => {
  const [completed, setComplited] = useState(checked);

  const classList = ["todo"];

  if (completed) {
    classList.push("completed");
  }

  return (
    <li className={classList.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setComplited(!completed)}
        />
        <span>{title}</span>

        <i className="material-icons red-text">delete</i>
      </label>
    </li>
  );
};

export default TodoItem;
