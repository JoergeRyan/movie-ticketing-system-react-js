
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
import Datelist from './Pages/Datelist';
import CancelReservation from './Pages/CancelReservation';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>

            <Route path="cancelreservation" element={<CancelReservation/>}></Route>

            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="datelist" element={<Datelist/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
