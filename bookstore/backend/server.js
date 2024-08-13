import express from "express"
import mongoose from "mongoose";
import Book from "./models/booksModel.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.status(200).send({message : "Hello world"})
})


//--------------------------------------------------
// 1. Get books api
app.get("/books",(req,res)=>{
    return Book.find();
})


//--------------------------------------------------


// Connecting the server with mongoDB database


mongoose.connect('mongodb+srv://root:root@books-store-mern.r5v4p.mongodb.net/?retryWrites=true&w=majority&appName=Books-Store-MERN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

app.listen(5555,()=>console.log("Server running on PORT : 5555"))