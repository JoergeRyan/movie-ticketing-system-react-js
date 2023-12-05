import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "../../Stylesheets/SeatLayout.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    async function getMovie() {
      console.log("test ="+id);
      try {
        // Make an Axios request to your server's register endpoint
        const response = await axios.post(
          "http://localhost:5000/movies/getOneMovie",
          {
            id: id
          }
        );
        // console.log("Server Response:", response.data);
        // Handle the response, you might want to check for success or display a message
        if (response.data) {
          console.log("get moive successful!");
          setSelectedMovie(response.data);
          // navigate('/home');
        } else {
          console.error("get moive failed. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
    getMovie();
  }, []);

  useEffect(() => {
    let totalSeats = selectedSeats.length;
    let pricePerSeat = 350;

    if (seniorsCount > 0) {
      // Calculate total price with a 20% discount for each senior
      let discount = 0.2; // 20% discount
      let discountedSeats = seniorsCount * discount;
      let totalPriceWithtDiscount =
        (totalSeats - discountedSeats) * pricePerSeat;
      setTotalPrice(Math.round(totalPriceWithtDiscount));
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
    
    let SelMov = [...selectedMovie.Reserved];
    const updatedSeats = document.querySelectorAll(".seat.selected");
    let flat=[]
    updatedSeats.forEach((seat) => {
      seat.classList.add("reserved");
      SelMov.push(seat.innerHTML)
      flat.push(seat.innerHTML)
    });
    console.log(flat)
    console.log("backend call");
    // const SelMov = [...selectedMovie.Reserved, updatedSeats]
    console.log(SelMov);
    async function getMovie() {
      console.log("test");
      try {
        // Make an Axios request to your server's register endpoint
        const response = await axios.patch(
          "http://localhost:5000/movies/reserve",
          {
            id: selectedMovie._id,
            Reserved: SelMov
          }
        );
        console.log("Server Response:", response.data);
        // Handle the response, you might want to check for success or display a message
        if (response.data) {
          console.log("update successful!");
          // setSelectedMovie(response.data);
          // navigate('/home');
        } else {
          console.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
    getMovie();
    async function makeTicket() {
      console.log("test ticket");
      try {
        // Make an Axios request to your server's register endpoint
        const response = await axios.post(
          "http://localhost:5000/tickets/add",
          {
            movieId: selectedMovie._id,
            movieName: selectedMovie.Movie,
            seats: flat,
            numSenior: seniorsCount,
            price: totalPrice
          }
        );
        console.log("Server Response:", response.data);
        // Handle the response, you might want to check for success or display a message
        if (response.data) {
          console.log("make ticket successful!");
          // setSelectedMovie(response.data);
          // navigate('/home');
        } else {
          console.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
    makeTicket()
    window.location.reload()
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
        let seatClass = isSelected ? "seat selected" : "seat";
        if (
          selectedMovie &&
          selectedMovie.Reserved &&
          selectedMovie.Reserved.includes(seatId)
        ) {
          seatClass += " reserved";
        }
        rowSeats.push(
          <div
            key={seatId}
            className={seatClass}
            onClick={() => {
              if (!seatClass.includes('reserved')) {
                handleSeatClick(seatId);
              }
            }}
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
    console.log();
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
              { selectedMovie && <>
                <ul>Cinema: {selectedMovie.Screen}</ul>
              <ul>Movie: {selectedMovie.Movie}</ul>
              <ul>Time: {selectedMovie.StartTime} - {selectedMovie.EndTime}</ul>
              <ul>Premiere: {selectedMovie.Premier?"Yes":"No"}</ul>
              <ul>Seats : {selectedSeats.join(" ")}</ul>
              <ul>Total : ₱ {totalPrice}</ul>
              </>
              }
            </div>
            {selectedMovie && !selectedMovie.Premier && <div className="seniors-input">
                <label htmlFor="seniorsInput">Number of Seniors</label>
                <input
                  type="number"
                  id="seniorsinput"
                  value={seniorsCount}
                  onChange={handleSeniorsInputChange}
                  min={0}
                  max={selectedSeats.length}
                />
              </div>
            }
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
