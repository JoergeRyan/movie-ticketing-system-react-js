import React from "react";
// import { Button, Input, Form } from "antd";
import "../../Stylesheets/Home.css";
// import * as Icons from "@ant-design/icons";

function Home() {
  return (
    <div className="home-container">
        <div className="navigation">
      <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          
        <label class="logo">Yamadasan's</label>
        <ul>
          <li><a class="active" href="#">Home</a></li>
          <li><a href="#">Reserve</a></li>
          <li><a href="#">Cancel Reservation</a></li>
        </ul>
      </nav>
      <section></section>
      </div>
    </div>
  );
}

export default Home;
