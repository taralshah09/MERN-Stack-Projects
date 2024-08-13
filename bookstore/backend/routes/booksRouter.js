import express from "express";
import Book from "../models/booksModel.js";
const router = express.Router();

// 1. Get books API
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({count : books.length , data : books});
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to fetch books", message: err.message });
  }
});

// 2. Get a specific book by ID API
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch book", message: error.message });
  }
});

// 3. Creating a book API
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({ message: "Send all the required fields" });
    }

    const newBook = {
      title: title,
      author: author,
      publishYear: publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).json(book);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// 4. Updating a book API
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Enter all the required fields!" });
    }

    const updatedBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.findByIdAndUpdate(id, updatedBook, { new: true });

    if (!book) {
      return res.status(404).send({ message: "Unable to find the book with id: " + id });
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// 5. Deleting a book API
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book with id " + id + " not found!" });
    }

    await Book.findByIdAndDelete(id);
    return res.status(200).send({ message: "Book successfully deleted!" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

export default router;
