import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";
const params = new URLSearchParams(window.location.search);

const token = params.get("token");
const username = params.get("username");

if (token) {
  localStorage.setItem("token", token);
}

if (username) {
  localStorage.setItem(
    "user",
    JSON.stringify({ username })
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
