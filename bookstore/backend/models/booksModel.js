import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        unique: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;