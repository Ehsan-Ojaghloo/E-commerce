import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./pages/index.scss";
import ProductPage from "./layout/ProductPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
