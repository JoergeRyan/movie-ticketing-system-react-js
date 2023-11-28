import React from 'react';
import { Modal, Button } from 'antd';

const TicketModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      title="Confirm Ticket Cancellation"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="confirm" type="primary" onClick={onConfirm}>
          Confirm
        </Button>,
      ]}
    >
      Are you sure you want to cancel this ticket?
    </Modal>
  );
};

export default TicketModal;