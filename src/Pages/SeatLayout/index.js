import React from "react";
import { Button } from "antd";
import "../../Stylesheets/SeatLayout.css";

function SeatLayout() {
  const rows = 5;
  const columns = 8;

  const convertToAlphanumeric = (rowIndex, colIndex) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const rowLetter = alphabet.charAt(rowIndex);
    const colNumber = colIndex + 1;
    return `${rowLetter}${colNumber}`;
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
      const rowSeats = [];
      for (let j = 0; j < columns; j++) {
        const seatId = convertToAlphanumeric(j, i);
        rowSeats.push(
          <div key={seatId} className="seat">
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
