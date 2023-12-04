import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TicketList from "./TicketList";
import TicketModal from "./TicketModal";
import "antd/dist/reset.css";
import "../../Stylesheets/CancelReservation.css";
import axios from "axios";

// Initial ticket data outside the component
const initialTicketData = [
  {
    ticketNumber: "T12354",
    description: "Transformers",
    status: "Open",
  },
  {
    ticketNumber: "T12456",
    description: "Shaolin Soccer",
    status: "In Progress",
  },
  {
    ticketNumber: "T12367",
    description: "Toy Story",
    status: "Closed",
  },
  {
    ticketNumber: "T12367",
    description: "Toy Story",
    status: "Closed",
  },
  {
    ticketNumber: "T12367",
    description: "Toy Story",
    status: "Closed",
  },
  {
    ticketNumber: "T12367",
    description: "Toy Story",
    status: "Closed",
  },

  // Add more ticket objects as needed
];

const CancelReservation = () => {
  const [searchText, setSearchText] = useState("");
  const [ticketData, setTicketData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
  };
  async function getTickets() {
    console.log("test =");
    try {
      // Make an Axios request to your server's register endpoint
      const response = await axios.get("http://localhost:5000/tickets/all");
      // console.log("Server Response:", response.data);
      // Handle the response, you might want to check for success or display a message
      if (response.data) {
        console.log("Registration successful!");
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


  // useEffect(() => {
  // If search text is empty, show all tickets
  // if (!searchText.trim()) {
  //   setTicketData(initialTicketData);
  //   return;
  // }

  // Filter the initialTicketData based on the searchText
  // const filteredTickets = initialTicketData.filter((ticket) =>
  //   ticket.ticketNumber.toLowerCase().includes(searchText.toLowerCase())
  // );

  // Update the ticketData state with the filtered tickets
  // setTicketData(filteredTickets);
  // }, [searchText]);

  const handleCancelTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedTicket(null);
    setIsModalVisible(false);
  };

  async function deleteTicket(id) {
    console.log("test ticket");
    try {
      // Make an Axios request to your server's register endpoint
      const response = await axios.delete(
        "http://localhost:5000/tickets/delete",
        {
          id: id
        }
      );
      console.log("Server Response:", response.data);
      // Handle the response, you might want to check for success or display a message
      if (response.data) {
        console.log("delete ticket successful!");
        // setSelectedMovie(response.data);
        // navigate('/home');
      } else {
        console.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  }
  
  const handleModalConfirm = (id) => {
    // Implement logic to cancel the selected ticket
    // const updatedTickets = ticketData.filter(
    //   (ticket) => ticket.ticketNumber !== selectedTicket.ticketNumber
    // );
    // console.log(id)
    deleteTicket(id)
    // getTickets()
    // setTicketData(updatedTickets);
    setSelectedTicket(null);
    setIsModalVisible(false);
  };

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
      </div>
    )
  );
};

export default CancelReservation;
