import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'
import '../../index.css';

const Notfound = () => {
  
  return (
    <div className="content-container">
      <Container className="mt-4 mb-4">
          <Alert variant="danger">
          <Alert.Heading>404 Not Found</Alert.Heading>
            <p>Oops! It doesn't look like the page you're looking for exists here.</p>
            <hr />
            <p className="mb-0">To get back the home page, please <Alert.Link href="/">click here</Alert.Link>.</p>
          </Alert>
      </Container>
    </div>
  );
}

export default Notfound;
