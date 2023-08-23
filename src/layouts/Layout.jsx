import React from "react";
import Sidebar from "../components/Sidebar"; 
import { Container, Row, Col } from "reactstrap"; 

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs="2">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col xs="10">
          {children} 
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
