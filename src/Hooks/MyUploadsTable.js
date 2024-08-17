import React from "react";
import { Table, Button } from "react-bootstrap";

const MyUploadsTable = ({ myUploads, onEdit, onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Label</th>
        <th>File Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {myUploads.map((upload, index) => (
        <tr key={index}>
          <td>{upload.label}</td>
          <td>{upload.fileName}</td>
          <td>
            <Button variant="link" onClick={() => onEdit(index)}>
              Edit
            </Button>
            <Button variant="link" onClick={() => onDelete(index)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default MyUploadsTable;
