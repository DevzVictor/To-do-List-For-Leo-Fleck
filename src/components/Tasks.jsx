import React from "react";
import Task from "./Task";
function Tasks({ tasks, handleTaskClick, handleTaskDeletion, handleTaskUpdate }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskUpdate={handleTaskUpdate}
        />
      ))}
      
    </>
  );
}

export default Tasks;
