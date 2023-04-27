import React from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => (
  <li>
    <span className="todo-text">{todo}</span>
    <button className="delete-btn" onClick={onDelete}>
      Delete
    </button>
    <button className="edit-btn" onClick={onEdit}>
      Edit
    </button>
  </li>
);

export default TodoItem;
