import React from "react";
import Task from "./Task";
import { useState } from "react";

function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  const [uniqueTask, setUniqueTask] = useState({});

  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
      
    </>
  );
}

export default Tasks;
