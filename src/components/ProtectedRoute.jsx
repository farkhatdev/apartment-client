import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const ProtectedRoute = ({
  isAuthenticated,
  setIsAuthenticated,
  setSidebarActive,
}) => {
  return isAuthenticated ? (
    <>
      <Navbar
        setIsAuthenticated={setIsAuthenticated}
        setSidebarActive={setSidebarActive}
      />
      <main className="main">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoute;
