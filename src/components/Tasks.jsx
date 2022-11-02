import React from "react";
import Task from "./Task";
function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
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
