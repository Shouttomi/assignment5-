import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Component from "./components/Component";
import Page from "./components/Page"
import Checknew from "./components/Checknew";



function App() {

  return(
    <BrowserRouter>
    <Routes>

    
    <Route path="/" element={<Component/>} />
    <Route path="page" element={<Page/>} />


    </Routes>
    <ToastContainer position="top-center" />
    </BrowserRouter>
  )

  
}

export default App;
