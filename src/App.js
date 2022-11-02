import { useState, useEffect } from "react";

import "./App.css";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { Api } from "./utils/Api";

function App() {
  const [tasks, setTasks] = useState([]);

  // renderizar tasks da API na tela
  async function getTask() {
    const task = await Api.getAllTask();
    setTasks(task);
  }
  
  useEffect(() => {
    getTask();
  }, []);


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };


  function handleTaskDeletion(taskId) {
    Api.deleteTask(taskId);
    const newTaskList = tasks;
    newTaskList.map((tasks, index) => {
      if(tasks.id === taskId) {
        newTaskList.splice(index, 1);
        setTasks(newTaskList);
      }
    });
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
}

export default App;
