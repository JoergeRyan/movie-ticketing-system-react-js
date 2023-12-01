import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TicketList from './TicketList';
import TicketModal from './TicketModal';
import 'antd/dist/reset.css';
import '../../Stylesheets/CancelReservation.css';

// Initial ticket data outside the component
const initialTicketData = [
  {
    ticketNumber: 'T12354',
    description: 'Transformers',
    status: 'Open',
  },
  {
    ticketNumber: 'T12456',
    description: 'Shaolin Soccer',
    status: 'In Progress',
  },
  {
    ticketNumber: 'T12367',
    description: 'Toy Story',
    status: 'Closed',
  },
  {
    ticketNumber: 'T13777',
    description: 'Toy Story',
    status: 'Closed',
  },
  {
    ticketNumber: 'T20007',
    description: 'Toy Story',
    status: 'Closed',
  },
  // Add more ticket objects as needed
];

const CancelReservation = () => {
  const [searchText, setSearchText] = useState('');
  const [ticketData, setTicketData] = useState(initialTicketData);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    // If search text is empty, show all tickets
    if (!searchText.trim()) {
      setTicketData(initialTicketData);
      return;
    }

    // Filter the initialTicketData based on the searchText
    const filteredTickets = initialTicketData.filter(
      (ticket) =>
        ticket.ticketNumber.toLowerCase().includes(searchText.toLowerCase())
    );

    // Update the ticketData state with the filtered tickets
    setTicketData(filteredTickets);
  }, [searchText]);

  const handleCancelTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedTicket(null);
    setIsModalVisible(false);
  };

  const handleModalConfirm = () => {
    // Implement logic to cancel the selected ticket
    const updatedTickets = ticketData.filter(
      (ticket) => ticket.ticketNumber !== selectedTicket.ticketNumber
    );

    setTicketData(updatedTickets);
    setSelectedTicket(null);
    setIsModalVisible(false);
  };

  return (
    <div className="CancelReservationBody">
    <div className="Cancel">
      <SearchBar onSearch={handleSearch} />
      <TicketList data={ticketData} handleCancelTicket={handleCancelTicket} />
      <TicketModal
        open={isModalVisible}
        onCancel={handleModalCancel}
        onConfirm={handleModalConfirm}
        selectedTicket={selectedTicket}
      />
    </div>
    </div>
  );
};

export default CancelReservation;