import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TicketList from './TicketList';
import TicketModal from './TicketModal';
import 'antd/dist/reset.css';
import '../../Stylesheets/CancelReservation.css';

const CancelReservation = () => {
  const [searchText, setSearchText] = useState('');
  const [ticketData, setTicketData] = useState();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
    // Implement your search logic here and update ticketData accordingly
  };

  const initialTicketData = [
    {
      ticketNumber: 'T12345',
      description: 'Issue with login functionality',
      status: 'Open',
    },
    {
      ticketNumber: 'T12346',
      description: 'Error in payment processing',
      status: 'In Progress',
    },
    {
      ticketNumber: 'T12347',
      description: 'UI design improvements',
      status: 'Closed',
    },
    // Add more ticket objects as needed
  ];


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
    setIsModalVisible(false);
  };

  return (
    <div className="Cancel">
      <SearchBar onSearch={handleSearch} />
      <TicketList data={ticketData} handleCancelTicket={handleCancelTicket} />
      <TicketModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default CancelReservation;