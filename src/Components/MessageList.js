import React from "react";

const MessageList = ({ messages, formatDate }) => (
  <div
    id="chat-box"
    style={{
      height: "300px",
      overflowY: "scroll",
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    {messages.map((msg, index) => (
      <p key={index}>
        <span>[{formatDate(msg.timestamp)}]</span> {msg.user} : {msg.text}
      </p>
    ))}
  </div>
);

export default MessageList;
