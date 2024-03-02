import React, { useState } from "react";
import useTodoStore from "../store/todoStore";

const AddTodo = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <input
        type="text"
        className="flex-1 p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="transition duration-200 ease-in-out transform hover:bg-primary_hover px-6 bg-primary text-white ml-2 rounded"
      >
        추가
      </button>
    </form>
  );
};

export default AddTodo;
