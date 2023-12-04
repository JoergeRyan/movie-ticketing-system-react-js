import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "../../Stylesheets/SeatLayout.css";
import { useNavigate, Link } from "react-router-dom";

function SeatLayout() {
  const navigate = useNavigate();
  function handleClickExit() {
    navigate("/home");
  }
  const rows = 5;
  const columns = 8;

  const [seniorsCount, setSeniorsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const isPremiere = false;

  useEffect(() => {
    if (selectedMovie){
      document.body.style.backgroundImage = `url('${selectedMovie.imgSource}')`;
      document.body.style.backgroundSize = "cover";
      document.bofy.style.backroundRepeat = "no-repeat"
    }
  }, [selectedMovie]);

  useEffect(() => {
    let totalSeats = selectedSeats.length;
    let pricePerSeat = 350;

    if (seniorsCount > 0) {
      // Calculate total price with a 20% discount for each senior
      let discount = 0.2; // 20% discount
      let discountedSeats = seniorsCount * discount;
      let totalPriceWithtDiscount =
        (totalSeats - discountedSeats) * pricePerSeat;
      setTotalPrice(totalPriceWithtDiscount);
    } else {
      // Calculate total price without discount
      let totalPriceWithoutDiscount = totalSeats * pricePerSeat;
      setTotalPrice(totalPriceWithoutDiscount);
    }
  }, [selectedSeats, seniorsCount]);

  const handleSeniorsInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSeniorsCount(isNaN(value) ? 0 : value);
  };

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
    const updatedSeats = document.querySelectorAll(".seat.selected");
    updatedSeats.forEach((seat) => {
      seat.classList.add("reserved");
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
          <div className="seat-grid">{renderSeats()}</div>
          <div className="division">
            <div className="description">
              <ul>Cinema</ul>
              <ul>Movie</ul>
              <ul>Time</ul>
              <ul>Premiere</ul>
              <ul>Seats : {selectedSeats.join(" ")}</ul>
              <ul>Total : ₱ {totalPrice}</ul>
            </div>
            {isPremiere ? (<div>No</div>) : (
            <div className="seniors-input">
              <label htmlFor="seniorsInput">Number of Seniors</label>
              <input
                type="number"
                id="seniorsinput"
                value={seniorsCount}
                onChange={handleSeniorsInputChange}
              />
            </div>
            )}
            <div className="button">
              <Button
                className="exitbutton"
                onClick={handleClickExit}
                type="primary"
                htmlType="submit"
                title="LOGIN"
              >
                Exit
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                title="LOGIN"
                onClick={handleReserveClick}
              >
                Reserve
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Confirm Reservation"
        visible={isModalVisible}
        onOk={handleModalConfirm}
        onCancel={handleModalCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleModalCancel}
            style={{ color: "white" }}
          >
            Cancel
          </Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={handleModalConfirm}
            style={{ color: "white" }}
          >
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
