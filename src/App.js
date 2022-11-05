/* eslint-disable array-callback-return */
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

  // executa somente quando o componente for renderizado pois não há nada no array de dependências
  useEffect(() => {
    getTask();
  }, []);

  // tarefa como concluída
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, complete: !task.complete };
      return task;
    });

    setTasks(newTasks);
  };

  // deletas task a partir do ID
  function handleTaskDeletion(taskId) {
    Api.deleteTask(taskId);
    const newTaskList = tasks;
    newTaskList.map((tasks, index) => {
      if (tasks.id === taskId) {
        newTaskList.splice(index, 1);
        setTasks(newTaskList);
      }
      getTask();
    });
  }

  return (
    <div className="container">
      <Header />
      <AddTask getAll={getTask} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskUpdate={getTask()}
      />
    </div>
  );
}

export default App;
