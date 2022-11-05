import { useState } from "react";

import "./Task.css";

import { RiCloseLine, RiSearchEyeLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Modal from "react-modal";
import Button from "./Button";
import { Api } from "../utils/Api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    height: "10.7rem",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  },
  overlay: {
    background: "rgba(0,0,0, 0.4)",
  },
};

Modal.setAppElement("#root");

function Task({ task, handleTaskClick, handleTaskDeletion, handleTaskUpdate}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueTask, setUniqueTask] = useState({});

  // abrir e fechar modal
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  // update task function
  function updateTask(event) {
    event.preventDefault();

    const updatedTask = uniqueTask;
    console.log(updatedTask);
    Api.updateTask(updatedTask._id, updatedTask);
    handleModal();
  }


  return (
    <div
      className="task-container"
      style={task.complete ? { borderLeft: "6px solid blue" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.tarefa}
      </div>
      <div className="icons-container">
        <button
          className="task-see"
          onClick={() => {
            setUniqueTask(task);
            handleModal();
          }}
        >
          <RiSearchEyeLine />
        </button>
        <button
          className="task-close"
          onClick={() => handleTaskDeletion(task._id)}
        >
          <RiCloseLine />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card Details"
      >
        <div className="update-task-container">
          <section className="update-header">
            <h1>Atualize sua Tarefa</h1>
            <button className="atualizar-btn" onClick={handleModal}>
              <CgClose size={28} color="red" />
            </button>
          </section>
          <form className="update-form-input">
            <input
              type="text"
              name="tarefa"
              defaultValue={task.tarefa}
              onChange={(event) => {
                setUniqueTask(
                  { ...uniqueTask, tarefa: event.target.value },
                );
              }}
              className="update-task-input"
            ></input>
            <div className="update-task-button-container">
              <Button onClick={updateTask} >Atualizar</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Task;
