import { Link } from "react-router-dom"

const BackToHome = () => {
    
  return (
    <Link to='/'>
    <div className="back-home-arrow">
      <i className="fa-solid fa-arrow-left"></i>
    </div>
    </Link>
  )
}

export default BackToHome
