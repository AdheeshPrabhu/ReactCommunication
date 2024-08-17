import { useState, useEffect } from "react";

const UseChat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const loadMessagesAndUser = () => {
    const storedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages);
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user ? user.fullName : "Unknown User");
  };

  const sendMessage = () => {
    const text = messageInput.trim();
    if (text) {
      const storedMessages =
        JSON.parse(localStorage.getItem("chatMessages")) || [];
      const timestamp = new Date().toISOString();
      const newMessage = { user: loggedInUser, text, timestamp };
      const updatedMessages = [...storedMessages, newMessage];

      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      setMessageInput("");
      setMessages(updatedMessages);
    }
  };

  useEffect(() => {
    loadMessagesAndUser();
    const interval = setInterval(loadMessagesAndUser, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    messages,
    messageInput,
    setMessageInput,
    loggedInUser,
    sendMessage,
    formatDate,
  };
};

export default UseChat;
