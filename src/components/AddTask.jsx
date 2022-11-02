import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
import { Api } from "../utils/Api";
import { getAllByAltText } from "@testing-library/react";

function AddTask({getAll}) {
  const [inputData, setInputData] = useState({"complete": false});

  //create task function
  async function handleAddTaskSubmit(event) {
    event.preventDefault();

    await Api.createTask(inputData);
    await getAll()
  }

  return (
    <div className="add-task-container">
      <form onSubmit={handleAddTaskSubmit} className="form-input">
        <input
          type="text"
          name="tarefa"
          onChange={(event) => {
            setInputData({...inputData, tarefa: event.target.value });
          }}
          className="add-task-input"
        ></input>
        <div className="add-task-button-container">
          <Button>Adicionar</Button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
