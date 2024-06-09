import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions/listTask";

const AddTask = () => {
  const [text, setText] = useState("");

  //dispatch  <=  action

  const dispatch = useDispatch();

  //function apdate

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ id: Math.random(), text, isDone: false }));
      setText("");
    } else {
      alert("can not add an empty task !");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddTask;
