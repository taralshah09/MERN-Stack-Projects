import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./LoginPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<h1>Home Page</h1>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/*" element={<h1>404 Page doesn't exist!</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
