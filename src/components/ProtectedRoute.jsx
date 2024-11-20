import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ setSidebarActive }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? (
    <>
      <Navbar setSidebarActive={setSidebarActive} />
      <main className="main">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoute;
