import React from "react";
import {  Button, List, Modal } from "antd";


type NotificationProps = {
  open: boolean;
  setOpen: (flag: boolean) => void;
};

const data = Array.from({ length: 5 }).map((_, i) => ({
  title: `Unassigned Team Tember ${i}`,
  description: "February 23,2023 10:30AM.",
  content: "We supply a series of design principles testing demo",
}));
const Notification: React.FC<NotificationProps> = ({ open, setOpen }) => {
  const style: React.CSSProperties = {
    
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  };
 
  return (
    <>
      <Modal
        style={{ position: "absolute", top: "50px", right: "60px" }}
        closable={false}
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
        width={350}
      >
        <div style={style}>
          <span style={{ fontWeight: "bold" }}>Notifications</span>
        
        </div>
        <List
          style={{
            height: 400,
            overflow: "auto",
            padding: "0 10px",
            margin: "20px 0px",
            scrollbarColor: "gray",
           
          }}
          itemLayout="horizontal"
          dataSource={data}
        
          renderItem={(item) => (
            <List.Item key={item.title}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
              {item.content}

              <div style={{ ...style, marginTop: "10px" }}>
                <Button size="small" danger>
                  Activate Member
                </Button>
                <Button size="small">Leave Unassigned</Button>
              </div>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default Notification;
