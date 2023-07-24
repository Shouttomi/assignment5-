import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom-toast.css";
import Component from "./components/Component";
import Page from "./components/Page";

// Create types for your page components
type ComponentProps = {};
type PageProps = {};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the types in Route components */}
        <Route path="/" element={<Component  />} />
        <Route path="/page" element={<Page  />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
