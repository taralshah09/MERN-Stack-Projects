import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import TodoModel from "./models/Tasks.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/todos-app");

app.get("/todos", (req, res) => {
  TodoModel.find()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(404).json({ message: err.message }));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  const isDone = req.body.isDone;
  TodoModel.create({
    task: task,
    isDone: isDone,
  })
    .then((newTask) => res.status(201).json(newTask))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// app.delete("/todos", (req, res) => {
//   const _id = req.body._id;
//   TodoModel.findByIdAndDelete(_id)
//     .then((result) => res.status(201).json(result))
//     .catch((err) => res.status(400).json({ message: err.message }));
// });

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params; // Extract the ID from the URL params
  TodoModel.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Todo deleted successfully", result });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params; // Extract the ID from the URL params
  TodoModel.findById(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      // Toggle the isDone status
      todo.isDone = !todo.isDone;
      return todo.save();
    })
    .then((updatedTodo) =>
      res
        .status(200)
        .json({ message: "Todo updated successfully", updatedTodo })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.listen(3000, () => console.log("Server running on 3000"));
