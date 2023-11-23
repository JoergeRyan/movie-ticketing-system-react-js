import Menu from "./Menu";
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>
            <Route path="register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
