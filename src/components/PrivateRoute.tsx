import React from "react";
import { useLocation, Navigate } from "react-router-dom";


export default function PrivateRoute({
  children,
  authenticated,
}: {
  children: JSX.Element;
  authenticated: boolean;
}) {
    let auth = localStorage.getItem("authToken");

  if(true){
    // Redirect them to the /unauthorized page, but save the current location they were
    // trying to go to when they were redirected.
    return <Navigate to='/unauthorized'
    // state={{ from: location }} replace
    />;
  }

 
  return children;
}
