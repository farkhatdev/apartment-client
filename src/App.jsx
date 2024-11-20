import React, { useState } from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { jwtDecode } from "jwt-decode";
import Alert from "./components/Alert";
import Profile from "./Pages/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { Apartments } from "../../server/src/model/schema";
import CreatePost from "./CreatePost/CreatePost";
import OneApartment from "./components/Apartments/OneApartment";
import Home from "./components/Home";

const App = () => {
  const alert = useSelector((state) => state.ui.alert);

  const [sidebarActive, setSidebarActive] = useState(false);

  const [setIsAuthenticated] = useState(() => {
    const accessToken = localStorage.getItem("access-token");
    if (!accessToken) return false;
    const decoded = jwtDecode(accessToken);
    return decoded.exp > Date.now() / 1000;
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      {alert.active ? <Alert /> : null}
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setSidebarActive={setSidebarActive}
            />
          }
        >
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartment/:id" element={<OneApartment />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          path="/auth/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/auth/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Register setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
