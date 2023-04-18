import Home from "./pages/Home";
import { Outlet, useRoutes } from "react-router-dom"
import AppCart from "./components/AppCart/AppCart";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./pages/Main";
import MainLayout from "./components/MainLayout"
import AuthProtect from "./components/AuthProtect";


function App() {
  return useRoutes([
    {
      path: "/",
      element: (
          <AuthProtect>
            <MainLayout>
                <Outlet />
            </MainLayout>
          </AuthProtect>
      ),
      children: [
        { path: "/", element: <Main /> },
        // { path: "signin", element: <SignIn /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <AppCart /> },
        { path: "signup", element: <SignUp /> }
      ],
    },
    { path: "signin", element: <SignIn /> },
  ]);
}
  

export default App;
