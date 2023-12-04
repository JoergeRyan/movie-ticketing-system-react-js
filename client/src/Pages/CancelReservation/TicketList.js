import React from "react";
import { List, Button } from "antd";

const TicketList = ({ data, handleCancelTicket }) => {

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item">
          <h1>Movie: {item.movieName}</h1>
          <h1>Senior Citizen: {item.numSenior}</h1>
          <Button type="primary" onClick={() => handleCancelTicket(item)}>
            Cancel
          </Button>
        </List.Item>
      )}
    />
  );
};

export default TicketList;
