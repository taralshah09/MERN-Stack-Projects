import express from "express";
import mongoose from "mongoose";
import Book from "./models/booksModel.js";
import router from "./routes/booksRouter.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//--------------------------------------------------
// Setting up the RESTful API for the backend
app.use("/books",router)
//--------------------------------------------------

// Connecting the server with mongoDB database
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.cbgoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(5555, () => console.log("Server running on PORT : 5555"));
