import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../Redux/Actions/listTask";
import "./Task.css";
import Edit from "../Edit/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task-container">
      <span className={task.isDone ? "done" : null}>{task.text}</span>
      <Edit task={task} />
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? "unDone" : "Done"}
      </button>
    </div>
  );
};

export default Task;
