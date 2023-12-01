import React, { useState } from "react";
import "../../Stylesheets/Landing.css";


function Landing(){
    return(
        <div className="landing-page">
            <div className="title-content">
            <h1 id="landing-header">Movie Reservation System</h1>
            

            
            <div className="landing-button">
                 <button className="button" type="button">Register</button>
                 <button className="button" type="button">Login</button>
            </div>

            </div>
          
            </div>
            
        
    );

}

export default Landing;