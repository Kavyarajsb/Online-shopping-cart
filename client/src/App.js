import Home from "./pages/Home";
import {Route,Routes } from "react-router-dom"
import AppCart from "./components/AppCart/AppCart";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./pages/Main";

function App() {
  return (
  
   <div>
       <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/cart" element={<AppCart />} />
      </Routes>
   
   </div>
  )
}

export default App;
