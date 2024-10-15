import React, { useState } from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { jwtDecode } from "jwt-decode";
import Alert from "./components/Alert";
import Apartments from "./components/Apartments";

const App = () => {
  const [alert, setAlert] = useState({
    message: "Error",
    active: false,
    type: "error",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const accessToken = localStorage.getItem("access-token");
    if (!accessToken) return false;

    const decoded = jwtDecode(accessToken);
    return decoded.exp > Date.now() / 1000;
  });

  return (
    <div className="app">
      {alert.active ? <Alert alert={alert} setAlert={setAlert} /> : null}

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
            />
          }
        >
          <Route path="/apartments" element={<Apartments />} />
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
