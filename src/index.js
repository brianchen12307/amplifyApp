import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Room from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Begin from "./pages/BeginPage"
import Post from "./pages/PostPage"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Begin />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/room" element={<Room />} />
        <Route exact path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
