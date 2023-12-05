import React from "react";
import { List, Button } from "antd";

const TicketList = ({ data, handleCancelTicket }) => {

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item">
          Movie: {item.movieName}
          <br />
          Senior Citizen: {item.numSenior}
          <Button type="primary" onClick={() => handleCancelTicket(item)}>
            Cancel
          </Button>
        </List.Item>
      )}
    />
  );
};

export default TicketList;
