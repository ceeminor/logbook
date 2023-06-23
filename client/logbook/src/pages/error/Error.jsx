import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'
import '../../index.css';

const Error = () => {
  
  return (
    <div className="content-container">
      <Container className="mt-4 mb-4">
        <Alert variant="danger">
          <Alert.Heading>We were unable to complete your request.</Alert.Heading>
          <p>Due to an unforeseen error, we were unable to complete your request, please try again.</p>
          <hr />
          <p className="mb-0">If this issue persists, please restart the application.</p>
        </Alert>
      </Container>
    </div>
  );
}

export default Error;
