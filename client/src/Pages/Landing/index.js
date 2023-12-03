import React, { useState } from "react";
import "../../Stylesheets/Landing.css";
import { useNavigate } from 'react-router-dom';

function Landing(){
    const navigate = useNavigate(); 

    function handleClickRegister() {
            navigate('/register');
    };

    function handleClickLogin(){
        navigate('/login')
    }
    return(
        <div className="landing-page">
            <div className="title-content">
            <h1 id="landing-header">Movie Reservation System</h1>
            
            <div className="landing-button">
                 <button className="buttonOn" onClick={handleClickRegister} type="button">Register</button>
                 <button className="buttonOn" onClick={handleClickLogin}type="button">Login</button>
            </div>

            </div>
          
            </div>
            
        
    );

}

export default Landing;