import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import ReservationRows from "../components/ReservationRows/ReservationRows.js";

function Admin() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        loadReservations();
    }, []);

    function loadReservations() {
        API.getReservations()
            .then(res => {
                res.data.forEach(item => {
                    item.formatReservation = new Date(Date.parse(item.reservation));
                    item.formatReservationString = `${item.formatReservation}`;
                    console.log(item.formatReservation);
                    // const correctReservation = new Date(formatReservation.setHours(formatReservation.getHours() - 5));
                    // console.log(correctReservation);
                    item.date = item.formatReservationString.split(" ")[0] + " " + item.formatReservationString.split(" ")[1] + " " + item.formatReservationString.split(" ")[2] + " " + item.formatReservationString.split(" ")[3];
                    if (parseInt(item.formatReservationString.split(" ")[4]) === 12) {
                        item.time = "12:00 pm";
                    } else if (parseInt(item.formatReservationString.split(" ")[4]) > 12) {
                        item.time = (parseInt(item.formatReservationString.split(" ")[4]) - 12) + ":" + item.formatReservationString.split(":")[1] + " pm";
                    } else {
                        item.time = item.formatReservationString.split(" ")[4].split(":")[0] + ":" + item.formatReservationString.split(" ")[4].split(":")[1] + " am"
                    }
                })
                const filteredData = res.data.filter(item => item.formatReservation.getDate() === (new Date).getDate());
                const sortedData = filteredData.sort((a, b) => a.formatReservation - b.formatReservation)
                console.log(sortedData)
                setReservations(sortedData)
            })
    }

    return (
        <div className="container py-4 px-5" style={{'backgroundColor': 'white'}}>
            <h1 className="row d-flex justify-content-center" style={{"fontSize": "5rem"}}>Reservations for today</h1>
            <main className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Reservation ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Party</th>
                            <th scope="col">Todays Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Check-in</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.map(item => (
                                <ReservationRows reservation={item}/>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Admin;