import { Route,Routes } from "react-router-dom"
import CreateBooks from "./pages/CreateBooks"
import ShowBook from "./pages/ShowBook"
import EditBook from "./pages/EditBook"
import DeleteBook from "./pages/DeleteBook"
const App = () => {
  return (
   <div>
    <Routes>
      <Route path='/' element={<h1 className="text-red-400 bg-slate-50 text-3xl font-bold">Hello world</h1>}></Route>
      <Route path="/books/create" element={<CreateBooks/>}></Route>
      <Route path="/books/details/:id" element={<ShowBook/>}></Route>
      <Route path="/books/edit/:id" element={<EditBook/>}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook/>}></Route>
    </Routes>

   </div>
  )
}

export default App
