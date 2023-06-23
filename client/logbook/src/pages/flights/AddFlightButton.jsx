import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../index.css';

const AddFlightButton = (props) => {
    
    return (
        <Container>
            <Row className="text-center mt-4 mb-4">
                <Col>
                    <Button 
                        className="px-5" 
                        variant="success"
                        onClick={() => {props.setAddFlightModalShow(true)}}
                        >
                        Add Flight
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddFlightButton;
