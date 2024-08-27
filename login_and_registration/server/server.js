import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employees");

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.status(201).json(employee))
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.post("/login", (req, res) => {
    const {email,password} = req.body;
    EmployeeModel.findOne({email : email})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success!")
            }
            else{
                res.json("Incorrect Password!")
            }
        }else{
            res.json("User doesn't exist!")
        }
    })
});



app.listen(3000, () => console.log("Server running on 3000"));