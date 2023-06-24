import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import * as yup from "yup";
import { Formik } from "formik";
import '../../index.css';

const schema = yup.object().shape({
    airline: yup.string().required("Please provide an airline"),
    flightnumber: yup.string().required("Please provide a flight number"),
    aircraft: yup.string().required("Please provide an aircraft"),
    departure: yup.string().required("Please provide a departure airport"),
    arrival: yup.string().required("Please provide an arrival airport"),
    duration: yup.number().positive().required("Please provide a duration"),
    date: yup.string().required("Please provide a date"),
    remarks: yup.string(),
});

const AddFlightModal = (props) => {

    const navigate = useNavigate();

    let submitForm = async (values) => {
        props.setAddFlightModalShow(false);
        window.scrollTo(0, 0);
        await fetch(`http://127.0.0.1:80/api/add/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(response => {
            if (response.ok) {
                props.getFlights()
            } else {
                navigate('/error');
            }
        });
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            <Modal.Title>Add Flight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={submitForm}
                    initialValues={{
                        airline: '',
                        flightnumber: '',
                        aircraft: '',
                        departure: '',
                        arrival: '',
                        duration: '',
                        date: '',
                        remarks: '',
                    }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group as={Col} md="12" controlId="airline">
                                <Form.Label>Airline</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Airline"
                                name="airline"
                                value={values.airline}
                                onChange={handleChange}
                                isInvalid={touched.airline && !!errors.airline}
                                isValid={touched.airline && !errors.airline}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.airline}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="flightnumber">
                                <Form.Label>Flight Number</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Flight number"
                                name="flightnumber"
                                value={values.flightnumber}
                                onChange={handleChange}
                                isInvalid={touched.flightnumber && !!errors.flightnumber}
                                isValid={touched.flightnumber && !errors.flightnumber}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.flightnumber}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="aircraft">
                                <Form.Label>Aircraft</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Aircraft"
                                name="aircraft"
                                value={values.aircraft}
                                onChange={handleChange}
                                isInvalid={touched.aircraft && !!errors.aircraft}
                                isValid={touched.aircraft && !errors.aircraft}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.aircraft}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="departure">
                                <Form.Label>Departure</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Departure"
                                name="departure"
                                value={values.departure}
                                onChange={handleChange}
                                isInvalid={touched.departure && !!errors.departure}
                                isValid={touched.departure && !errors.departure}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.departure}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="arrival">
                                <Form.Label>Arrival</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Arrival"
                                name="arrival"
                                value={values.arrival}
                                onChange={handleChange}
                                isInvalid={touched.arrival && !!errors.arrival}
                                isValid={touched.arrival && !errors.arrival}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.arrival}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control
                                type="number"
                                placeholder="Duration"
                                name="duration"
                                value={values.duration}
                                onChange={handleChange}
                                isInvalid={touched.duration && !!errors.duration}
                                isValid={touched.duration && !errors.duration}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.duration}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="MM/DD/YYY"
                                name="date"
                                value={values.date}
                                onChange={handleChange}
                                isInvalid={touched.date && !!errors.date}
                                isValid={touched.date && !errors.date}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.date}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="remarks">
                                <Form.Label>Remarks</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Remarks"
                                            name="remarks"
                                            value={values.remarks}
                                            onChange={handleChange}
                                            isInvalid={touched.remarks && !!errors.remarks}
                                            isValid={touched.remarks && !errors.remarks}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.remarks}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="primary" onClick={props.onHide}>
                                    Cancel
                                </Button>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default AddFlightModal;
