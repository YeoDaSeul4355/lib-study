import React from "react";
import useTodoStore from "../store/todoStore";
import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <AnimatePresence>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default TodoList;
