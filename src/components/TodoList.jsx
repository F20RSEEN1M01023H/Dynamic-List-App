// src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onRemove, onToggle }) {
  if (!todos || todos.length === 0) {
    return <div className="empty">No tasks yet — add your first task!</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
