import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
import { Api } from "../utils/Api"

function AddTask({handleTaskAddition}) {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputData(e.target.value);
  };

  async function handleAddTaskClick(){
    await Api.createTask(inputData)
    // handleTaskAddition(inputData);
    // setInputData("");
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      ></input>
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;