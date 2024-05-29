import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import Login from "./components/Login";
import ContentManagement from "./components/ContentManagement";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import AddProduct from "./components/AddProduct";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "pass") {
      setIsAuthenticated(true);
      setUserRole("admin");
    } else if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      setUserRole("user");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    // Handle the logout logic here
    console.log('Logging out...');
    // Redirect to login page
    // You can use Navigate component from react-router-dom instead of history.push('/login')
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated ? (
          userRole === "admin" ? (
            <>
              <Route
                path="/"
                element={<ContentManagement onLogout={handleLogout} />}
              />
              <Route path="/EditProduct/:id" element={<EditProduct />} />
              <Route path="/DeleteProduct/:id" element={<DeleteProduct />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/ProductPage" element={<ProductPage />} />
              <Route path="/ViewCart" element={<ViewCart />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
