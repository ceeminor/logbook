import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { BiTrash } from 'react-icons/bi';
import '../../index.css';

const FlightsTable = (props) => {

    return (
        <Container responsive className="mt-4">
             {props.flights.length > 0 ?
                <Table responsive bordered striped hover variant="dark">
                    <thead>
                        <tr className="text-center">
                        {[
                            'Airline',
                            'Flight Number',
                            'Aircraft',
                            'Departure',
                            'Arrival',
                            'Duration',
                            'Date',
                            'Remarks',
                            'Action',
                        ].map((column) => (
                        <th>{column}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.flights.toReversed().map((flight, index) => (
                            <tr className="text-center">
                                <td>{flight.airline}</td>
                                <td>{flight.flightnumber}</td>
                                <td>{flight.aircraft}</td>
                                <td>{flight.departure}</td>
                                <td>{flight.arrival}</td>
                                <td>{flight.duration}</td>
                                <td>{flight.date}</td>
                                <td>{flight.remarks}</td>
                                <td>
                                    <BiTrash 
                                        className="admin-icons ms-1 me-1" 
                                        onClick={() => {
                                            props.setCurrentFlight(flight); 
                                            props.setDeleteFlightModalShow(true)
                                        }}
                                    /> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </Table> :
            <Table responsive bordered striped hover variant="dark">
                    <thead>
                        <tr className="text-center">
                        {[
                            'Airline',
                            'Flight Number',
                            'Aircraft',
                            'Departure',
                            'Arrival',
                            'Duration',
                            'Date',
                            'Remarks',
                            'Action',
                        ].map((column) => (
                        <th>{column}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td colSpan={9}>No flights in database</td>
                        </tr>
                    </tbody>
                </Table>
            }
        </Container>
    );
}

export default FlightsTable;
