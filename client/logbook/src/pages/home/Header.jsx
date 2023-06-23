import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../index.css';

const Header = () => {
    
    return (
        <Container>
            <Row className="text-center mt-4 mb-4">
                <Col className="px-5">
                    <Row className="d-flex justify-content-center header-title mb-4 text-center">
                        Welcome to Logbook
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
  
export default Header;
