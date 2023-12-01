import { createContext, useContext } from "react";

type Tasks = {
  id: string;
  name: string;
  description: string | null;
  status: STATUS;
  // Add other properties as needed
};

type STATUS = "ONGOING" | "COMPLETED";

interface contextProps {
  onGoingTask: Tasks[];
  completedTask: Tasks[];
  fetchOngoingTasks: () => void;
  fetchCompletedTasks: () => void;
}

const TodoListContext = createContext<contextProps | undefined>(undefined);

export default TodoListContext;
export const useTodoListContext = () => {
  const contextValue = useContext(TodoListContext);

  if (!contextValue) {
    // Handle the case where the context value is undefined
    console.error("TodoListContext value is undefined");
    return {
      onGoingTask: [],
      completedTask: [],
      fetchOngoingTasks: () => {},
      fetchCompletedTasks: () => {},
    };
  }

  return contextValue;
};
