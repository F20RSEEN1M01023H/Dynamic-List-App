// src/App.jsx
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="font-mono bg-linear-to-br from-slate-900 via-gray-700 to-gray-900 min-h-screen p-4 flex justify-center items-center flex-col">
      <div className="app border border-2 border-white rounded-lg w-7xl  max-w-full mx-auto p-6 shadow-lg">
        <header className="text-center font-bold text-white ">
          <h1> Dynamic Todo App</h1>
          <p>Add, remove, and manage your tasks -- build momentum!</p>
        </header>

        <main>
          <TodoInput />
        </main>
      </div>
    </div>
  );
}
