import React from 'react';
import { List, Button } from 'antd';

const TicketList = ({ data, handleCancelTicket }) => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item">
          {item.ticketNumber} - {item.description} - {item.status}
          <Button type="primary" onClick={() => handleCancelTicket(item)}>
            Cancel 
          </Button>
        </List.Item>
      )}
    />
  );
};

 export default TicketList;