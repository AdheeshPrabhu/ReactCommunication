import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import MyUploadsTable from "../Hooks/MyUploadsTable";
import useDocumentManager from "../Hooks/useDocumentManager";

const DocumentList = () => {
  const {
    myUploads,
    showModal,
    labelInput,
    fileNameInput,
    editIndex,
    setShowModal,
    setLabelInput,
    setFileNameInput,
    handleSaveUpload,
    handleEditUpload,
    handleDeleteUpload,
    handleCloseModal,
  } = useDocumentManager();

  return (
    <div className="container">
      <h3>My Uploads</h3>
      <Row className="mb-3">
        <Col>
          <Button onClick={() => setShowModal(true)}>Add Upload</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <MyUploadsTable
            myUploads={myUploads}
            onEdit={handleEditUpload}
            onDelete={handleDeleteUpload}
          />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex === -1 ? "Add Upload" : "Edit Upload"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="labelInput">
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                value={labelInput}
                onChange={(e) => setLabelInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="fileNameInput">
              <Form.Label>File Name</Form.Label>
              <Form.Control
                type="file"
                value={fileNameInput}
                onChange={(e) => setFileNameInput(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveUpload}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DocumentList;
