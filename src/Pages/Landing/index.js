import React, { useState } from "react";
import "../../Stylesheets/Landing.css";


function Landing(){
    return(
        <div className="landing-page">
            <div className="landing-span">
            <h1 id="landing-header">Movie Reservation System</h1>
            <div>
            <div className="landing-button">
                 <button id="register" type="primary" htmlType="submit" title="REGISTER">
                     Register
                 </button>
                 <button id="login" type="primary" htmlType="submit" title="LOGIN">
                    Login
                </button>
      </div>
            </div>
            </div>
        </div>
    );

}

export default Landing;