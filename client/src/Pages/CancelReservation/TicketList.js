import React from "react";
import { List, Button } from "antd";

const TicketList = ({ data, handleCancelTicket }) => {
  console.log(data);

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item">
          {item._id} - {item.movieName} - {item.seats.length}
          <Button type="primary" onClick={() => handleCancelTicket(item)}>
            Cancel
          </Button>
        </List.Item>
      )}
    />
  );
};

export default TicketList;
