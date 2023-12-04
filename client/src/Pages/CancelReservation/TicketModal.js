import React from 'react';
import { Modal, Button } from 'antd';

const TicketModal = ({ open, onCancel, onConfirm, selectedTicket }) => {
  return (
    <Modal
      title="Cancel Confirmation"
      open={open}  // Use the open prop instead of visible
      onCancel={onCancel}
      footer={[
        <Button key="cancel" type="primary" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="confirm" type="primary" onClick={onConfirm}>
          Confirm 
        </Button>,
      ]}
    >
      <p>
        Are you sure you want to cancel the ticket with number  <b>{selectedTicket ? selectedTicket._id : ''}</b>?
      </p>
      <p>
        Total Price: {selectedTicket? selectedTicket.price:'0.00'}
      </p>
    </Modal>
  );
};

export default TicketModal;


