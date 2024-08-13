import express from "express"
import { Book } from "../models/bookModel.js";

const route = express.Router();

  // 2. Creating a route to create a new book
  route.post("", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: "Send all required fields : title,author,publishYear",
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
      return res.status(200).send(book);
    } catch (error) {
      console.log(error);
    }
  });
  
  // 3. Get all the books
  route.get("", async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  // 4. Get the book by Id
  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const bookWithID = await Book.find({ _id: id });
      res.status(200).json(bookWithID);
    } catch (error) {
      console.log(error);
    }
  });
  
  // 5. Updating a book
  route.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        res.status(404).json({ message: "Send all the required feilds" });
      }
  
      const { id } = req.params;
      const result = await Book.findByIdAndUpdate(id, req.body,{new:true});
  
      if (!result) {
        return res.status(404).json({ message: "Book doesn't exist!" });
      }
  
      return res.status(200).json({message:"Book updated successfully!"});
    } catch (error) {
      console.log(error);
    }
  });
  
  // 6. Delete a book
  route.delete("/:id",async(req,res)=>{
      try {
          const {id} = req.params;
          const result = await Book.findByIdAndDelete(id);
  
          if(!result){
           return res.status(404).json({message:"Book not found!"})
          }
          return res.status(200).json({message:"Book successfully got deleted"})
  
          
      } catch (error) {
          return res.status(404).json({message:"Unable to delete the book with id : " + id});
      }
  })

  export default route;