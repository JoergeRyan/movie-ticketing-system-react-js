import Menu from "./Pages/Menu";
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>

            
            <Route path="menu" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
