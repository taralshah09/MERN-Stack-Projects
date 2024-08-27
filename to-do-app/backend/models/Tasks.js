import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema({
  task: String,
  isDone: { type: Boolean, default: false },
});

const TodoModel = mongoose.model("todos", TodosSchema);

export default TodoModel;
