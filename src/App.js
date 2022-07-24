import React from 'react'
import Project from './Components/Project'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Register from './Components/Register';
import {app} from  "./config";
function App() {
  console.log(app);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App