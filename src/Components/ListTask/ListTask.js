import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const list = useSelector((state) => state.listReducer.listeTask);
  const [status, setStatus] = useState("All");
  return (
    <div>
      <Button variant="light" onClick={() => setStatus("All")}>
        All
      </Button>
      <Button variant="light" onClick={() => setStatus("Done")}>
        Done
      </Button>
      <Button variant="light" onClick={() => setStatus("UnDone")}>
        UnDone
      </Button>

      {status === "Done"
        ? list
            .filter((el) => el.isDone === true)
            .map((el) => <Task task={el} key={el.id} />)
        : status === "UnDone"
        ? list
            .filter((el) => el.isDone === false)
            .map((el) => <Task task={el} key={el.id} />)
        : list.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default ListTask;
