import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import '../../index.css';

const TotalFlightTime = (props) => {

    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col>
                    <Badge bg="warning" variant="dark">
                        Total Flight Time: {props.totalFlightTime} hours
                    </Badge>
                </Col>
            </Row>
        </Container>
    );
}

export default TotalFlightTime;
