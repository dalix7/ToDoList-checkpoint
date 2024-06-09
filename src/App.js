import React from "react";
import "./App.css";
import ListTask from "./Components/ListTask/ListTask";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
