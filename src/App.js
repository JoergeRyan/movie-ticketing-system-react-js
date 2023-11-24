
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>

            
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            
            
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
