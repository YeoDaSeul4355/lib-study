import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const ZustandTodo = () => {
  return (
    <div className="pt-[10%] container mx-auto max-w-md h-screen py-6 font-NanumSquareNeo">
      <div className="flex flex-col p-4 border rounded-lg shadow-lg max-h-[70vh] overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">💜Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default ZustandTodo;
