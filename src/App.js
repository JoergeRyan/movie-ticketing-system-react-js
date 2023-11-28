
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
// import Datelist from './Pages/Datelist';
import SeatLayout from './Pages/SeatLayout';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="menu" element={<Menu/>}></Route>


            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="seatlayout" element={<SeatLayout/>}></Route>
            

            {/* <Route path="datelist" element={<Datelist/>}></Route> */}




        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
