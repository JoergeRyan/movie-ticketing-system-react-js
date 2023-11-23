import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App