import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom"
import AppCart from "./components/AppCart/AppCart";

function App() {
  return (
  
   <div>
       
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<AppCart />} />
      </Routes>
    
   </div>
  )
}

export default App;
