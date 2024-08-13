import React, { useEffect, useState } from "react";
import BackToHome from "../components/BackToHome.jsx";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBookPage = () => {
  const [deleteItem,setDeleteItem] = useState(false)
  const {id} = useParams();
  const navigate = useNavigate();
  const handleDelete = async(e)=>{
    try {
      e.preventDefault()
      axios.delete(`http://localhost:5555/books/${id}`)
    .then(console.log("Item got deleted successfully"))
    navigate("/")
    } catch (error) {
      throw new Error(error)
    }
    

  }

  return (
    <>
    <BackToHome/>
    <div className="delete-box" onClick={handleDelete}>
      <h3>Are you sure you want to delete this?</h3>
      <button>Yes</button>
      
    </div>
    </>
  )
}

export default DeleteBookPage
