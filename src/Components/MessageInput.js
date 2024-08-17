import React from "react";
import { Form, Button } from "react-bootstrap";

const MessageInput = ({
  messageInput,
  setMessageInput,
  sendMessage,
  loggedInUser,
}) => (
  <Form.Group
    controlId="message"
    style={{ display: "flex", alignItems: "center" }}
  >
    <strong>{loggedInUser}</strong> :
    <Form.Control
      type="text"
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      placeholder="Type your message..."
      style={{ flex: 1, marginRight: "10px" }}
    />
    <Button variant="primary" onClick={sendMessage}>
      Send
    </Button>
  </Form.Group>
);

export default MessageInput;
