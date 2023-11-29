
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
import Datelist from './Pages/Datelist';
import CancelReservation from './Pages/CancelReservation';
import CenimaList from './Pages/CinemaList';
// import Datelist from './Pages/Datelist';
import SeatLayout from './Pages/SeatLayout';
import ImageComponent from "./Pages/Home";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="home" element={<ImageComponent/>}></Route>
            <Route path="menu" element={<Menu/>}></Route>
            <Route path="cancelreservation" element={<CancelReservation/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="datelist" element={<Datelist/>}></Route>
            <Route path="cinemalist" element={<CenimaList/>}></Route>
            <Route path="seatlayout" element={<SeatLayout/>}></Route>
            

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
