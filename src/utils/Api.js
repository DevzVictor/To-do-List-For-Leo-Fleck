const defaultUrl = "https://api-todolist-blue.herokuapp.com/tarefas";

export const Api = {
  createTask: async (Task) => {
    const response = await fetch(defaultUrl + "/create-tarefas", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(Task),
    });
    const newAnime = await response.json();
    return newAnime;
  },

  getAllTask: async () => {
    const response = await fetch(defaultUrl + "/all-tarefas");
    const allTasks = await response.json();

    return allTasks;
  },

  deleteTask: async (animeId) => {
    const response = await fetch(defaultUrl + "/delete/" + animeId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const animeDeleted = await response.json();
    return animeDeleted;
  },

  updateTask: async (anime) => {
    const response = await fetch(defaultUrl + "/update", {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(anime),
    });

    const animeUpdated = await response.json();
    return animeUpdated;
  },
};