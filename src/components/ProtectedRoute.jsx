import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <>
      <Navbar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoute;
