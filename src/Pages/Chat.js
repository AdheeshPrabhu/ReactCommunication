import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UseChat from "../Hooks/useChat";
import MessageList from "../Components/MessageList";
import MessageInput from "../Components/MessageInput";

const Chat = () => {
  const {
    messages,
    messageInput,
    setMessageInput,
    loggedInUser,
    sendMessage,
    formatDate,
  } = UseChat();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Chat</Card.Title>
              <MessageList messages={messages} formatDate={formatDate} />
              <MessageInput
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                sendMessage={sendMessage}
                loggedInUser={loggedInUser}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
