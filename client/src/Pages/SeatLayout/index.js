import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../../Stylesheets/SeatLayout.css";

function SeatLayout() {
  const rows = 5;
  const columns = 8;

  // const[seniorsCount, setSeniorsCount] =useState(0);

  // const incrementSeniorsCount = () =>{
  //   setSeniorsCount(seniorsCount +1);
  // };

  // const decrementSeniorsCount = () =>{
  //   if(seniorsCount >0){
  //     setSeniorsCount(seniorsCount-1);
  //   }
  // };
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleReserveClick = () => {
    setIsModalVisible(true);
  };

  const handleModalConfirm = () => {
    
    setIsModalVisible(false);
    const updatedSeats = document.querySelectorAll('.seat.selected');
    updatedSeats.forEach(seat => {
      seat.classList.add('reserved');
    });

  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
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
      <h1 id="screen-title">Screen</h1>
      <div className="seat-layout">
      <div className="display">
        <div className="description">
          <ul>Cinema</ul>
          <ul>Movie</ul>
          <ul>Time</ul>
          <ul>Premiere</ul>
          <ul>Seniors</ul>
          {/* <div className="seniors-counter">
            <button onclick={incrementSeniorsCount}>+</button>
            <span>{seniorsCount}</span>
            <button onClick={decrementSeniorsCount}>-</button>
          </div> */}
          <ul>Seats</ul>
          <ul>Total</ul>
        </div>
        <div className="seat-grid">{renderSeats()}</div>
      </div>
      {/* <div className="legend">
        <ul>Available Seats</ul>
        <ul></ul>
      </div> */}
      <div className="button">
        <Button type="primary" htmlType="submit" title="LOGIN">
          Exit
        </Button>
        <Button type="primary" htmlType="submit" title="LOGIN" onClick={handleReserveClick}>
          Reserve
        </Button>
      </div>
      </div>
      <Modal
      title="Confirm Reservation"
      visible={isModalVisible}
      onOk={handleModalConfirm}
      onCancel={handleModalCancel}
      footer={[
       <Button key="cancel" onClick={handleModalCancel} style={{ color: 'white' }}>
       Cancel
       </Button>,
       <Button key="confirm" type="primary" onClick={handleModalConfirm} style={{color: 'white' }}>
       Confirm
       </Button>,
  ]}
>
  <p>Do you want to confirm the reservation?</p>
</Modal>
    </div>
  );
}

export default SeatLayout;
