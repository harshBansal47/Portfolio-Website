"use client"
import React, { useState } from 'react'
import TodoListContext from './context'
import { getCompletedTasks, getOngoingTasks } from './actions';

type Tasks = {
  id: string;
  name: string;
  description: string | null;
  status: STATUS;
  // Add other properties as needed
};

type STATUS = "ONGOING" | "COMPLETED";

const TodoProvider = ({children}:{children:React.ReactNode}) => {
    const [onGoingTask,setOnGoingTask] = useState<Tasks[]>([])
    const [completedTask,setCompletedTask] = useState<Tasks[]>([])

    const fetchOngoingTasks:()=>void = async () => {
        try {
          const tasks = await getOngoingTasks();
          if (tasks) {
            setOnGoingTask(tasks);
          } else {
            console.error('No ongoing tasks found');
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      const fetchCompletedTasks:()=>void = async () => {
        try {
          const tasks = await getCompletedTasks();
          if (tasks) {
            setCompletedTask(tasks);
          } else {
            console.error('No completed tasks found');
          }
        } catch (error) {
          console.error(error);
        }
      };

      
  return (
    <TodoListContext.Provider value={{onGoingTask,completedTask,fetchCompletedTasks,fetchOngoingTasks}}>
        {children}
    </TodoListContext.Provider>
  )
}

export default TodoProvider