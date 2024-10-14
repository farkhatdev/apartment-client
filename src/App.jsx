import React, { useState } from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { jwtDecode } from "jwt-decode";
import Alert from "./components/Alert";

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
        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/"
            element={<Home setIsAuthenticated={setIsAuthenticated} />}
          />
        </Route>
        {/* Non-Protected Routes */}
        <Route
          path="/auth/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
