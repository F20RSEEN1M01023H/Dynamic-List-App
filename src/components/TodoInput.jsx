// src/components/TodoInput.jsx
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoList from "./TodoList";

export default function TodoInput() {
  const [todos, setTodos] = useLocalStorage("hami_todos", []);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return; // validation: no empty items

    const newTodo = {
      id: Date.now(), // unique id (simple)
      text: trimmed,
      done: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const clearAll = () => {
    if (todos.length === 0) return;
    if (confirm("Clear all todos?")) setTodos([]);
  };

  return (
    <section className="todo-section ">
      <form onSubmit={addTodo} className="todo-form ">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task (e.g., Learn React hooks)"
          aria-label="Add todo"
        />
        <button type="submit" className=" border border-white text-white">
          Add
        </button>
        <button type="button" onClick={clearAll} className="danger">
          Clear
        </button>
      </form>

      <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleDone} />
    </section>
  );
}
