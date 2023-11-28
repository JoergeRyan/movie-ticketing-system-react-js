// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import TicketList from './TicketList';
// import TicketModal from './TicketModal';
// import 'antd/dist/reset.css';
// import '../../Stylesheets/CancelReservation.css';

// // Initial ticket data outside the component
// const initialTicketData = [
//   {
//     ticketNumber: 'T12354',
//     description: 'Issue with login functionality',
//     status: 'Open',
//   },
//   {
//     ticketNumber: 'T12456',
//     description: 'Error in payment processing',
//     status: 'In Progress',
//   },
//   {
//     ticketNumber: 'T12367',
//     description: 'UI design improvements',
//     status: 'Closed',
//   },
//   // Add more ticket objects as needed
// ];

// const CancelReservation = () => {
//   const [searchText, setSearchText] = useState('');
//   const [ticketData, setTicketData] = useState(initialTicketData);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleSearch = (text) => {
//     setSearchText(text);
//   };

//   useEffect(() => {
//     // If search text is empty, show all tickets
//     if (!searchText.trim()) {
//       setTicketData(initialTicketData);
//       return;
//     }

//     // Filter the initialTicketData based on the searchText
//     const filteredTickets = initialTicketData.filter(
//       (ticket) =>
//         ticket.ticketNumber.toLowerCase().includes(searchText.toLowerCase())
//     );

//     // Update the ticketData state with the filtered tickets
//     setTicketData(filteredTickets);
//   }, [searchText]);

//   const handleCancelTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setIsModalVisible(true);
//   };

//   const handleModalCancel = () => {
//     setSelectedTicket(null);
//     setIsModalVisible(false);
//   };

//   const handleModalConfirm = () => {
//     // Implement logic to cancel the selected ticket
//     // Assuming cancelTicketApiCall is your actual API call function
//     cancelTicketApiCall(selectedTicket)
//       .then(() => {
//         const updatedTickets = ticketData.filter(
//           (ticket) => ticket.ticketNumber !== selectedTicket.ticketNumber
//         );

//         setTicketData(updatedTickets);
//         setSelectedTicket(null);
//         setIsModalVisible(false);
//       })
//       .catch((error) => {
//         console.error('Error canceling ticket:', error);
//         setSelectedTicket(null);
//         setIsModalVisible(false);
//       });
//   };

//   return (
//     <div className="Cancel">
//       <SearchBar onSearch={handleSearch} />
//       <TicketList data={ticketData} handleCancelTicket={handleCancelTicket} />
//       <TicketModal
//         visible={isModalVisible}
//         onCancel={handleModalCancel}
//         onConfirm={handleModalConfirm}
//       />
//     </div>
//   );
// };

// export default CancelReservation;