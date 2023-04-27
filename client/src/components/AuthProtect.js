import { Navigate } from "react-router-dom";


function AuthProtect(props) {
  const isAuth = sessionStorage.getItem("isAuth") === "true";
  if ( isAuth) {
    return <Navigate to="/signin" />;
  }
  return props.children;
}

export default AuthProtect;
