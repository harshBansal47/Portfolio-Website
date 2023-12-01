"use client";
import React, { useState } from "react";
import { completeTask, deleteSelectedTask } from "../_context/actions";
import { useTodoListContext } from "../_context/context";

type Tasks = {
  id: string;
  name: string;
  description: string | null;
  status: STATUS;
  // Add other properties as needed
};
type STATUS = "ONGOING" | "COMPLETED";

const Task: React.FC<Tasks> = ({ name, description, id,status }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { fetchOngoingTasks, fetchCompletedTasks } = useTodoListContext();
  const activateOnDelete = () => {
    deleteSelectedTask(id);
    fetchOngoingTasks();
    fetchCompletedTasks();
  };
  const activateOnChecked = () => {
    setIsChecked(!isChecked);
    completeTask(id);
    fetchOngoingTasks();
    fetchCompletedTasks();
  };

  return (
    <div className=" w-full  flex flex-col items-center p-1 bg-white opacity-70 rounded-xl shadow-lg group transition-all">
      <div className="w-full flex items-center space-x-4">
        <div className="shrink-0 ml-2 flex items-center">
         {status === "ONGOING" && <input
            type="checkbox"
            className="w-5 h-5 checked:bg-red-500"
            checked={isChecked}
            onChange={activateOnChecked}
          />}
        </div>
        <div className="flex items-center grow justify-between pr-2">
          <div className="text-md  font-bold text-black">{name}</div>
          
           <div
            className="shrink-0 font-bold text-3xl flex items-center text-black justify-center p-1 border border-gray-400 bg-gray-300 rounded-md  px-4 hover:bg-gray-800  hover:text-white focus:opacity-75 focus:bg-gray-400"
            onClick={activateOnDelete}
          >
            x
          </div>
          
        </div>
      </div>
      <div className="w-full">
        <p className="text-slate-500 hidden group-hover:flex p-2 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Task;