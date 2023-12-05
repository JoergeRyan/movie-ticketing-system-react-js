import React, { useState, useEffect } from "react";
import { Button, Form } from "antd";
import SearchBar from "./SearchBar";
import TicketList from "./TicketList";
import TicketModal from "./TicketModal";
import "antd/dist/reset.css";
import "../../Stylesheets/CancelReservation.css";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const CancelReservation = () => {
  const [searchText, setSearchText] = useState("");
  const [ticketData, setTicketData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (text) => {
    setSearchText(text);
  };
  //The function is declared with the async keyword, asynchronous operations and will return a promise.
  async function getTickets() {
    try {
      // Make an Axios request to your server's register endpoint
      const response = await axios.get("http://localhost:5000/tickets/all");
      // console.log("Server Response:", response.data);
      // Handle the response, you might want to check for success or display a message
      if (response.data) {
        // console.log("Registration successful!");
        setTicketData(response.data);
        // navigate('/home');
      } else {
        console.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  }

  useEffect(() => {
    getTickets();
  }, []);

  const handleCancelTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedTicket(null);
    setIsModalVisible(false);
  };

  const handleModalConfirm = () => {
    console.log(selectedTicket);
    console.log("---");
    console.log(ticketData);

    const ticketToDelete = ticketData.find(ticket => ticket._id === selectedTicket._id);
    console.log("tickettodelete- "+ticketToDelete)
    let newSeats = [];

    async function getMovie() {
      console.log("test");
      try {
        // Make an Axios request to your server's register endpoint
        const response = await axios.post(
          "http://localhost:5000/movies/getOneMovie",
          {
            id: ticketToDelete.movieId
          }
        );
        // console.log("Server Response:", response.data);
        // Handle the response, you might want to check for success or display a message
        if (response.data) {
          console.log("Registration successful!");
          newSeats=response.data.Reserved;
          console.log("ticketToDelete")
          console.log(ticketToDelete)
          console.log("newSeats")
          console.log(newSeats)
          newSeats = newSeats.filter(seat => !ticketToDelete.seats.includes(seat));
          console.log("newSeats")
          console.log(newSeats)
          
          async function removeReservedSeat() {
            try {
              // Make an Axios request to delete the ticket by ID
              const response = await axios.patch(
                "http://localhost:5000/movies/reserve",
                {
                  id: ticketToDelete.movieId,
                  Reserved: newSeats
                }
              );
              console.log("Server Response:", response.data);

              // Check if the delete operation was successful
              if (response.status === 200) {
                console.log("Delete ticket successful!");
                // Perform actions after successful deletion if needed
              } else {
                console.error("Failed to delete ticket. Please try again.");
                // Handle the error or display a message to the user
              }
            } catch (error) {
              console.error("An error occurred during ticket deletion:", error);
              // Handle the error or display a message to the user
            }
          }
          removeReservedSeat();

          async function deleteTicket() {
            console.log("delete");
            try {
              // Make an Axios request to delete the ticket by ID
              const response = await axios.delete(
                "http://localhost:5000/tickets/delete",
                {
                  data: { id: selectedTicket },
                }
              );
              window.location.reload();
              console.log("Server Response:", response.data);
      
              // Check if the delete operation was successful
              if (response.status === 200) {
                console.log("Delete ticket successful!");
                // Perform actions after successful deletion if needed
              } else {
                console.error("Failed to delete ticket. Please try again.");
                // Handle the error or display a message to the user
              }
            } catch (error) {
              console.error("An error occurred during ticket deletion:", error);
              // Handle the error or display a message to the user
            }
          }
          deleteTicket();
          // navigate('/home');
        } else {
          console.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
    getMovie(); 
    setSelectedTicket(null);
    setIsModalVisible(false);

  };
  function handleClickBack() {
    navigate(-1);
  }


  return (
    ticketData && (
      <div className="CancelReservationBody">
        <div className="Cancel">
          <SearchBar id="search" onSearch={handleSearch} />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <TicketList
              data={ticketData}
              handleCancelTicket={handleCancelTicket}
            />
          </div>
          <TicketModal
            open={isModalVisible}
            onCancel={handleModalCancel}
            onConfirm={handleModalConfirm}
            selectedTicket={selectedTicket}
          />
        </div>
        <div>
        <Button classNamne="back-button"
            style={{
              // marginRight: "10px",
              color: "white",
              backgroundColor: "red",
            }}
            onClick={handleClickBack}
          >
              Back
          </Button>
        </div>

      </div>
    )
  );
};

export default CancelReservation;
