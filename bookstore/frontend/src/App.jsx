import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetBookPage from "./pages/GetBookPage";
import EditBookPage from "./pages/EditBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";
import CreateBookPage from "./pages/CreateBookPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/books/create" element={<CreateBookPage/>}></Route>
        <Route path='/books/details/:id' element={<GetBookPage/>}></Route>
        <Route path='/books/edit/:id' element={<EditBookPage/>}></Route>
        <Route path='/books/delete/:id' element={<DeleteBookPage/>}></Route>
        <Route path='/books/*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
 