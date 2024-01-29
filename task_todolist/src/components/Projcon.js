
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModalForm from "./ModalForm";


const Projcon = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [inReviewItems, setInReviewItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    // Initialize state once when the component mounts
    setTodoItems([]);
    setInProgressItems([]);
    setInReviewItems([]);
    setCompletedItems([]);
  }, []);

  const handleShow = (status) => {
    setSelectedStatus(status);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = (formData) => {
    switch (selectedStatus) {
      case "Todo":
        setTodoItems((prevItems) => [...prevItems, formData]);
        break;
      case "In Progress":
        setInProgressItems((prevItems) => [...prevItems, formData]);
        break;
      case "In Review":
        setInReviewItems((prevItems) => [...prevItems, formData]);
        break;
      case "Completed":
        setCompletedItems((prevItems) => [...prevItems, formData]);
        break;
      default:
        break;
    }

    setShowModal(false);
  };
  
  const formcon= {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    
  };

  return (
    <Container fluid className="vh-100">
      <ModalForm
        show={showModal}
        handleClose={handleClose}
        selectedStatus={selectedStatus}
        handleSave={handleSave}
      />
      <Row className="h-100">
        
        <Col md={3}>
          <div className="">
            <Button
              className="mt-3 rounded-4"
              style={{ backgroundColor: "#3659E2" }}
            >
              .Todo
            </Button>
            <div className="w-75 mt-2 d-flex justify-content-center"  >
                  <Container  className=""style={formcon}>
                    <Row>
                      <Col md={12}>
                          <p className="mt-3" style={{color:"black",fontWeight:"bold"}}>Create a To-Do-App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p style={{fontWeight:"lighter"}}>Start Date</p>
                        <div  className="d-flex mb-1 text-primary" style={{borderRadius:"10px",height:"30px",width:"90px", backgroundColor:"#f0f0f0"}}> 
                          <p  className="">01/12/2023</p>
                        </div>
                      </Col>
                      <Col md={6}>
                      <p style={{fontWeight:"lighter"}}>End Date</p>
                      <div  className="d-flex mb-1 text-primary" style={{borderRadius:"10px",height:"30px",width:"90px", backgroundColor:"#f0f0f0"}}> 
                          <p  className="">01/12/2023</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>                 
            </div>

              {todoItems.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
              </div>
            ))}
            <Button
              className="text-center mt-3  fs-6"
              style={{
                border: 0,
                backgroundColor: "#3659E2",
                color: "#EBEEFC",
                width: "30vh",
              }}
              onClick={() => handleShow("Todo")}
            >
              + Add New
            </Button>
          </div>
        </Col>
        {/* Render In Progress Column */}
        <Col md={3}>
          <div className="">
            <Button
              className="mt-3 rounded-4"
              style={{ border: "0", backgroundColor: "#EE46BC" }}
            >
              .In Progress
            </Button>
            <Button
              className="mt-4 fs-6"
              style={{
                border: 0,
                backgroundColor: "#EE46BC",
                color: "#EBEEFC",
                width: "30vh",
              }}
            >
              + Add New
            </Button>
            {/* Render In Progress items here */}
            {inProgressItems.map((item, index) => (
              <div key={index}>
                {/* Render in progress item details here */}
                <p>{item.name}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </Col>
        {/* Render In Review Column */}
        <Col md={3}>
          <div className="">
            <Button
              className="mt-3 rounded-4"
              style={{ border: "0", backgroundColor: "#3FA1E3" }}
            >
              .In Review
            </Button>
            <Button
              className="mt-4 fs-6"
              style={{
                border: 0,
                backgroundColor: "#3FA1E3",
                color: "#EBEEFC",
                width: "30vh",
              }}
            >
              + Add New
            </Button>
            {/* Render In Review items here */}
            {inReviewItems.map((item, index) => (
              <div key={index}>
                {/* Render in review item details here */}
                <p>{item.name}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </Col>
        {/* Render Completed Column */}
        <Col md={3}>
          <div className="">
            <Button
              className="mt-3 rounded-4"
              style={{ border: "0", backgroundColor: "#12BB23" }}
            >
              .Completed
            </Button>
            <Button
              className="mt-4 fs-6"
              style={{
                border: 0,
                backgroundColor: "#12BB23",
                color: "#EBEEFC",
                width: "30vh",
              }}
            >
              + Add New
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projcon;
