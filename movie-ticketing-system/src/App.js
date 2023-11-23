import Menu from "./Menu";
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
