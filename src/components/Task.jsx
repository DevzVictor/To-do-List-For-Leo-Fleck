import React from "react";
import "./Task.css";
import { RiCloseLine, RiSearchEyeLine } from "react-icons/ri";

function Task({ task, handleTaskClick, handleTaskDeletion }) {

  return (
    <div
      className="task-container" 
      style={task.completed ? { borderLeft: "6px solid blue" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.tarefa}
      </div>
      <div className="icons-container">
        <button className="task-see">
            <RiSearchEyeLine/>
        </button>
        <button
        className="task-close"
        onClick={() => handleTaskDeletion(task.id)}>
        <RiCloseLine/>
        </button>
        
          
      </div>
    </div>
  );

}

export default Task;