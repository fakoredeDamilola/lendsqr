import {  Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";


export default function PrivateRoute({
  children,
  authenticated,
}: {
  children: JSX.Element;
  authenticated: boolean;
}) {
  const [authToken] = useLocalStorage("auth",false)
console.log({})
  if(!authToken){
    // Redirect them to the /unauthorized page, but save the current location they were
    // trying to go to when they were redirected.
    return <Navigate to='/unauthorized'
    replace
    />;
  }

 
  return children;
}
