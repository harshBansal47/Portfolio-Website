import React from "react";
import TodoProvider from "./_context/TodoProvider";

const TodoListLayout = ({ children }: { children: React.ReactNode }) => {
  return <TodoProvider>{children}</TodoProvider>;
};

export default TodoListLayout;
