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

  Api.createTask(setTasks);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (task) => {
    const newTasks = [
      ...tasks,
      {
        tarefa: task,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id === taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
}

export default App;
