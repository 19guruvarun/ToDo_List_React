import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import Projcon from './components/Projcon';
import './App.css';
function App() {
  return (
    <div >
      <Container fluid className="vh-100">
      <Row className='h-100'>
        <Col md={2} className=" p-3">
          <h4 className='text-dark m-3'><span className='text-primary fs-3'><FontAwesomeIcon icon={faSliders} /></span>   Task boards</h4>
          <Nav className="flex-column mt-5 align-items-center">
            <Nav.Link href="#" className=" m-2 w-100 text-dark text-decoration-none mynav">Freelance Project</Nav.Link>
            <Nav.Link href="#"className="w-100 m-2 text-dark text-decoration-none mynav">SBI Oursource</Nav.Link>
            <Nav.Link href="#"className="w-100 m-1 text-dark text-decoration-none mynav">HPCL Peoject 1</Nav.Link>
            
          </Nav>
          <hr/>
          <Button className='btn  fs-6'style={{border:0,backgroundColor: "rgba(54, 89, 226, 0.2)",color:"#3659E2",width:"30vh"}}>+ Add New</Button>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-3">
          {/* Navbar */}
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#"><h3>My Projects</h3></Navbar.Brand>

              <Navbar.Collapse id="basic-navbar-nav">
               
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Main Content Body */}
          <Container className="mt-3">
            <Projcon/>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
