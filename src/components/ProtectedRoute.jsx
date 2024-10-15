import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ isAuthenticated, setIsAuthenticated }) => {
  return isAuthenticated ? (
    <>
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      <main className="main">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoute;
