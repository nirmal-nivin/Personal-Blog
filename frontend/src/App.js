import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="px-10 bg-white border rounded-md">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
