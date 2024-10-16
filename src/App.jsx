import React, { useState } from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { jwtDecode } from "jwt-decode";
import Alert from "./components/Alert";
import Apartments from "./components/Apartments";
import CreatePost from "./CreatePost/CreatePost";
import Profile from "./Pages/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [alert, setAlert] = useState({
    message: "Error",
    active: false,
    type: "error",
  });
  const [sidebarActive, setSidebarActive] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const accessToken = localStorage.getItem("access-token");
    if (!accessToken) return false;

    const decoded = jwtDecode(accessToken);
    return decoded.exp > Date.now() / 1000;
  });

  return (
    <div className="app">
      {alert.active ? <Alert alert={alert} setAlert={setAlert} /> : null}
      {sidebarActive ? (
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
      ) : null}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/apartments" />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
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
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          path="/auth/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setAlert={setAlert}
              />
            )
          }
        />
        <Route
          path="/auth/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Register
                setIsAuthenticated={setIsAuthenticated}
                setAlert={setAlert}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
