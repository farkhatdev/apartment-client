import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoute;
