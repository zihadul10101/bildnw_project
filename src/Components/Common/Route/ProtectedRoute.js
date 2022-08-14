import React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }, props) => {
  const token = localStorage.getItem("token");
  if (token === null || token === undefined) {
    return <Navigate to="/" replace />;
  } else {
    return <Component />;
  }
};

export default ProtectedRoute;
