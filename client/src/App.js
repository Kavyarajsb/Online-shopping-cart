import Home from "./pages/Home";
import {Route,Routes, Outlet, useRoutes } from "react-router-dom"
import AppCart from "./components/AppCart/AppCart";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./pages/Main";
import { AuthProvider } from "./components/AuthProvider";



function App() {
  return(
  
   <div>
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route exact path="signin" element={<SignIn/>}>
      <Route path="home" element={<Home />}/>
      <Route path="cart" element={<AppCart />} />
      </Route>      
      </Routes>
      </AuthProvider>
   </div>
  )
}
  

export default App;
