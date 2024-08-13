import React,{useEffect, useState} from 'react'
import BackToHome from '../components/BackToHome'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const GetBookPage = () => {
  const [book,setBook] = useState({})
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    try {
      axios.get(`http://localhost:5555/books/${id}`)
      .then(res => setBook(res.data))    
    } catch (error) {
      throw new Error(error)
    }
    
  },[0])
  return (
  <>
    <BackToHome/>
    <div className='details-box'>
      <h2>Book's Details</h2>
      <div className="box">
        <h4>Title : </h4><span>{book.title}</span>
      </div>
      <div className="box">
        <h4>Author : </h4><span>{book.author}</span>
      </div>
      <div className="box">
        <h4>Publish Year : </h4><span>{book.publishYear}</span>
      </div>
      <div className="box">
        <h4>ID : </h4><span>{book._id}</span>
      </div>
      
    </div>
  </>
  )
}

export default GetBookPage
