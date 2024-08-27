import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add", { task: task, isDone : false })
      .then((result) => location.reload())
      .catch((err) => console.log(err.message));
    
      setTask("")
  };
  return (
    <div className="create">
      <input
        type="text"
        placeholder="Add your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
