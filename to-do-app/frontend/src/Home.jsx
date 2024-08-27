import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchTodos();
  }, [0]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/todos/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err.messgae));
  };

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/todos/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="home">
      <h2>To do App</h2>
      <Create />
      <div className="todos-container">
        {todos.length === 0 ? (
          <p>No records found</p>
        ) : (
          todos.map((todo) => (
            <div className="todo">
              {todo.isDone ? (
                <i
                  className="fa-solid fa-check"
                  onClick={() => handleEdit(todo._id)}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-circle"
                  onClick={() => handleEdit(todo._id)}
                ></i>
              )}
              <p
                style={{
                  textDecoration: !todo.isDone ? "none" : "line-through",
                }}
              >
                {todo.task}
              </p>
              <div className="btns-box">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDelete(todo._id)}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
