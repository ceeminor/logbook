import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import FlightsTitle from './FlightsTitle';
import FlightTable from './FlightsTable';
import AddFlightButton from './AddFlightButton';
import AddFlightModal from './AddFlightModal';
import DeleteFlightModal from './DeleteFlightModal';
import TotalFlightTime from './TotalFlightTime';

const Flights = () => {

    const navigate = useNavigate();

    let [flights, setFlights] = useState([]);
    let [current_flight, setCurrentFlight] = useState({});
    let [totalFlightTime, setTotalFlightTime] = useState();
    
    const [addFlightModalShow, setAddFlightModalShow] = useState(false);
    const [deleteFlightModalShow, setDeleteFlightModalShow] = useState(false);

    useEffect(() => {
        getFlights();
    }, []);

    function getTotalTime(data) {
        var total = 0;
        data.forEach((flight, index) => {
            total += flight.duration
        });
        return total;
    }

    let getFlights = async () => {
        window.scrollTo(0, 0);
        let response = await fetch(`http://127.0.0.1:80/api/flights/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await response.json();
        if (response.ok) {
            setFlights(data);
            setTotalFlightTime(getTotalTime(data));
        } else {
            navigate('/error')
        }
    }

    let deleteFlight = async (id) => {
        setDeleteFlightModalShow(false);
        window.scrollTo(0, 0);
        let response = await fetch(`http://127.0.0.1:80/api/delete/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            getFlights();
        } else {
            navigate('/error')
        }
    }

    return (
        <div className="content-container">
            <FlightsTitle />
            <AddFlightButton
                show={addFlightModalShow}
                setAddFlightModalShow={setAddFlightModalShow}
                setDeleteFlightModalShow={setDeleteFlightModalShow}
                setCurrentFlight={setCurrentFlight}
                onHide={() => setAddFlightModalShow(false)}
            />
            <TotalFlightTime
                totalFlightTime={totalFlightTime} 
            />
            <FlightTable
                flights={flights}
                setCurrentFlight={setCurrentFlight}
                setDeleteFlightModalShow={setDeleteFlightModalShow}
            />
            <AddFlightModal 
                show={addFlightModalShow}
                setAddFlightModalShow={setAddFlightModalShow}
                getFlights={getFlights}
                onHide={() => setAddFlightModalShow(false)}
            />
            <DeleteFlightModal 
                show={deleteFlightModalShow}
                current_flight={current_flight}
                setDeleteFlightModalShow={setDeleteFlightModalShow}
                onHide={() => setDeleteFlightModalShow(false)}
                onConfirm={() => deleteFlight(current_flight.ID)}
            />
        </div>
    );
}

export default Flights;
