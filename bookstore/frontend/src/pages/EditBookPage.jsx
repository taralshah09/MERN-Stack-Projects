import   { useState, useEffect } from "react";
import BackToHome from "../components/BackToHome";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from the URL

  // Fetch the book data for editing
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5555/books/${id}`);
        const book = res.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear: Number(publishYear), // Ensure publishYear is a number
    };

    setLoading(true);
    try {
      await axios.put(`http://localhost:5555/books/${id}`, data); // Include ID in URL
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackToHome />
      <div className="create-book-container">
        <h2>Edit Book</h2>
        <form className="create-book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter book author"
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishYear">Publish Year</label>
            <input
              type="number"
              name="publishYear"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              placeholder="Enter publish year"
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Updating..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBookPage;
