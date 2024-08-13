import React, { useEffect, useState } from "react";
import BackToHome from "../components/BackToHome.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        console.log(error);
      });
  } 
  return (
    <>
      <BackToHome />
      <div className="create-book-container">
        <h2>Create Book</h2>
        <form className="create-book-form">
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

          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBookPage;
