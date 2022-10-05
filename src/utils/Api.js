const defaultUrl = "https://api-todolist-blue.herokuapp.com/tarefas";

export const Api = {
  createTask: async (Task) => {
    const response = await fetch(defaultUrl + "/create-tarefas", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(Task),
    });
    const newTask = await response.json();
    return newTask;
  },

  getAllTask: async () => {
    const response = await fetch(defaultUrl + "/all-tarefas");
    const allTasks = await response.json();

    return allTasks;
  },

  deleteTask: async (taskId) => {
    const response = await fetch(defaultUrl + "/delete-tarefas/" + taskId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const taskDeleted = await response.json();
    return taskDeleted;
  },


};