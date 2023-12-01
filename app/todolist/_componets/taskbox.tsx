import React from "react";

const TaskBox = ({
  heading,
  element,
}: {
  heading: string;
  element: React.ReactNode;
}) => {
  return (
    <div className="w-[350px] h-[500px] p-4 mx-auto flex flex-col space-y-2 items-center bg-gray-900 opacity-70 rounded text-gray-50 cursor-pointer">
      <h1 className="text-xl font-bold text-center">{heading}</h1>
      {element}
    </div>
  );
};

export default TaskBox;