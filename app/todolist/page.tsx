/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import TaskBox from "./_componets/taskbox";
import CreateTaskForm from "./_componets/taskForm";
import Task from "./_componets/task";
import { useTodoListContext } from "./_context/context";

const TodoList = () => {
  const { fetchCompletedTasks, fetchOngoingTasks, onGoingTask, completedTask } =
    useTodoListContext();

    useEffect(() => {
       fetchOngoingTasks();
       fetchCompletedTasks();
    }, []); 

  return (
    <div className="w-full relative bg-gradient-to-br from-blue-500 to-green-500">
      {/* Grid Overlay */}
      <div className="w-full h-full bg-bgGrid bg-repeat-y bg-center bg-cover opacity-80 absolute top-0 left-0 z-10 "></div>
      {/* Image Overlay */}
      <div className="w-full h-full bg-todoBgImage bg-center bg-cover bg-fixed opacity-60 absolute top-0 left-0 z-20 "></div>

      <div className="flex justify-center items-center z-50 relative pb-4">
        <h1 className="absolute top-0 mt-4 px-6 py-3 text-4xl font-bold text-gray-100 text-center rounded-full bg-gradient-to-br from-blue-600 to-green-600 border">
          Task Manager
        </h1>
        <div className="flex flex-col min-h-screen items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 md:justify-evenly pt-24 mx-auto">
          <TaskBox 
            heading="Create Tasks" 
            element={<CreateTaskForm />} />
          <TaskBox
            heading="Ongoing Tasks"
            element={onGoingTask.map((task) => (
              <Task
                key={task.id}
                name={task.name}
                description={task.description}
                id={task.id}
                status={task.status}
              />
            ))}
          />
          <TaskBox
            heading="Completed Tasks"
            element={completedTask.map((task) => (
              <Task
                key={task.id}
                name={task.name}
                description={task.description}
                id={task.id}
                status={task.status}
              />
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;