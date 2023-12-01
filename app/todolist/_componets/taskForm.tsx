import React from "react";
import { createTask } from "../_context/actions";
import { useTodoListContext } from "../_context/context";
import { useRef } from "react";

const CreateTaskForm = () => {
  const {fetchOngoingTasks}  = useTodoListContext();
  const activate = (e:React.SyntheticEvent)=>{
    setTimeout(()=>{
      fetchOngoingTasks()
      formRef.current!.reset();
    },2000)
  }
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between">
      <form
          action={createTask}
         onSubmit={activate}
         ref={formRef}
        className="flex flex-col space-y-4 flex-grow"
      >
        <input
          type="text"
          className="w-full p-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-100 rounded text-gray-950 outline-none pl-2 text-sm font-bold"
          placeholder="Enter Task Name"
          required
          name="name"
        />
        <textarea
          placeholder="Enter Description"
          rows={5}
          cols={4}
          className="w-full p-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-100 rounded text-gray-950 outline-none pl-2 text-sm font-bold"
          name="description"
        ></textarea>
        <input
          type="date"
          placeholder="Choose Due Time"
          className="w-full p-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-100 rounded text-gray-950 outline-none pl-2 text-sm font-bold"
          name="dueDate"
        />
        <button
          type="submit"
          className="bg-red-700 text-white p-2 rounded hover:bg-red-500 focus:opacity-20"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;