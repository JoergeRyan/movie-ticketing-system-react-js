import React, { useState } from "react";
import { Button } from "antd";
import "../../Stylesheets/SeatLayout.css";

function SeatLayout() {
  const rows = 5;
  const columns = 8;


  const [selectedSeats, setSelectedSeats] = useState([]);

  const convertToAlphanumeric = (rowIndex, colIndex) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const rowLetter = alphabet.charAt(rowIndex);
    const colNumber = colIndex + 1;
    return `${rowLetter}${colNumber}`;
  };

  const handleSeatClick = (seatId) => {
   
    const seatIndex = selectedSeats.indexOf(seatId);
    if (seatIndex === -1) {
      
      setSelectedSeats([...selectedSeats, seatId]);
    } else {
     
      const updatedSelectedSeats = [...selectedSeats];
      updatedSelectedSeats.splice(seatIndex, 1);
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
      const rowSeats = [];
      for (let j = 0; j < columns; j++) {
        const seatId = convertToAlphanumeric(j, i);
        const isSelected = selectedSeats.includes(seatId);
        const seatClass = isSelected ? "seat selected" : "seat";
        rowSeats.push(
          <div
            key={seatId}
            className={seatClass}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
      seats.push(
        <div key={i} className="seat-row">
          {rowSeats}
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="seat-layout-container">
      <h1>Screen</h1>
      <div className="display">
        <div className="description">
          <ul>Cinema</ul>
          <ul>Movie</ul>
          <ul>Time</ul>
          <ul>Premiere</ul>
          <ul>Seniors</ul>
          <ul>Seats</ul>
          <ul>Total</ul>
        </div>
        <div className="seat-grid">{renderSeats()}</div>
      </div>
      <div className="legend">
        <ul>Available Seats</ul>
        <ul></ul>

      </div>
      <div className="button">
        <Button type="primary" htmlType="submit" title="LOGIN">
          Exit
        </Button>
        <Button type="primary" htmlType="submit" title="LOGIN">
          Reserve
        </Button>
      </div>
    </div>
  );
}

export default SeatLayout;
