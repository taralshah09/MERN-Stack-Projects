import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackToHome from '../components/BackToHome';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5555/books');
        setBooks(res.data.data); // Assuming the response data is the array of books
        console.log(res.data.data); // Log the actual data
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="top-box">
        <h1>Books List</h1>
        <Link to='/books/create'>
          <i className="fa-solid fa-plus" style={{ fontSize: "30px" }}></i>
        </Link>
      </div>

      {loading ? <p>Loading...</p> : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>
                  <Link to={`/books/details/${book._id}`}>
                    <i className="fa-solid fa-circle-info" style={{ marginRight: '10px' ,color:"green",fontSize:"20px"}}></i>
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <i className="fa-solid fa-pen-to-square" style={{ marginRight: '10px',color:"orange",fontSize:"20px" }}></i>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <i className="fa-solid fa-trash" style={{color:"red",fontSize:"20px"}}></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomePage;
