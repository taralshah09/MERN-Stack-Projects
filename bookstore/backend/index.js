// Importing all the neccesary stuffs
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import route from "./routes/booksRoutes.js";
import cors from "cors"
const booksRoutes = route;


// Setting up express in NodeJS and making the code to obtain raw data from the POST method
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establishing cors here for the books-store-app

// Option 1 : Allow all origin with default of cors(*)
// app.use(cors())
// Option 2 : Allow custom origins
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods : ['GET','POST','PUT','DELETE'],
//     allowedHeaders : ['Content-type']
// }))



// ----------------------------------------------------------------

// Building a restful API -> transferred it into the routes folder

// 1. Basic page
app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
  });


app.use("/books",booksRoutes);

// ----------------------------------------------------------------

// This part includes the running of server on the PORT
app.listen(PORT, () => console.log("Server running on " + PORT));

// Integration of mongoDB database using mongoose
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
