// ModalForm.js

import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ModalForm = ({ show, handleClose, selectedStatus, handleSave }) => {
  const [validated, setValidated] = useState(false);
  const [itemName, setItemName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Reset form fields when the modal is shown
    setItemName("");
    setStartDate("");
    setEndDate("");
    setValidated(false);
    setStatus(selectedStatus); // Set the status based on the selected dropdown
  }, [show, selectedStatus]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Call the handleSave function with form data
      handleSave({ itemName, startDate, endDate, status });
    }

    setValidated(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item ({selectedStatus})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit} id="myForm">
          {/* Item Name */}
          <Form.Group controlId="formItemName">
            <Form.Label>Name of the task</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter task name here"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the task name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Date Fields in a Single Row */}
          <Row className="mt-2">
            <Col>
              {/* Start Date */}
              <Form.Group controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please select the start date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              {/* End Date */}
              <Form.Group controlId="formEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please select the end date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Status Dropdown */}
          <Form.Group controlId="formDropdown" className="mt-2">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="In review">In review</option>
              <option value="Completed">Completed</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select the status.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="myForm">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
