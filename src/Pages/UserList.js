import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    const storedLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(storedLoggedInUser);
  }, []);

  const handleEdit = (index) => {
    setCurrentIndex(index);
    setCurrentUser(users[index]);
    setShowEditModal(true);
  };

  const handleDelete = (index) => {
    setCurrentIndex(index);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[currentIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowEditModal(false);
  };

  const confirmDelete = () => {
    const updatedUsers = users.filter((_, index) => index !== currentIndex);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <Table bordered hover responsive size="sm">
        <thead>
          <tr className="table-active">
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>{" "}
                {loggedInUser && user.email !== loggedInUser.email && (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={currentUser.fullName || ""}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, fullName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="userEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={currentUser.email || ""}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
                disabled={
                  loggedInUser && currentUser.email === loggedInUser.email
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserList;
