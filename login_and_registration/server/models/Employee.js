import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("register",EmployeeSchema)

export default EmployeeModel;
