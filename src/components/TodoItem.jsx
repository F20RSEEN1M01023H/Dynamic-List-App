// src/components/TodoItem.jsx
import React from "react";

export default function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark ${todo.text} as ${todo.done ? "not done" : "done"}`}
        />
        <span className="text">{todo.text}</span>
      </label>

      <div className="actions">
        <small className="time">
          {new Date(todo.createdAt).toLocaleTimeString()}
        </small>
        <button
          onClick={() => onRemove(todo.id)}
          aria-label={`Remove ${todo.text}`}
          className="border-white border rounded-md p-1"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
