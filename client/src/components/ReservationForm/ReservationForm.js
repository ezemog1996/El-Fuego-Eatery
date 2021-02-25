import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

function ReservationForm() {

    const [reservation, setReservation] = useState({
        name: "",
        party: 0,
        date: "",
        time: ""
    })

    const handleInputChange = event => {
        const {name, value} = event.target;

        setReservation({
            ...reservation,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log({
            name: reservation.name,
            party: reservation.party,
            reservation: `${reservation.date} ${reservation.time}`
        })
        if (parseInt(reservation.party) && parseInt(reservation.date) && reservation.time !== "selected" && reservation.date.split("-")[0].length === 4 && reservation.date.split("-")[1].length === 2 && reservation.date.split("-")[2].length === 2) {
            API.reserve({
                name: reservation.name,
                party: reservation.party,
                reservation: `${reservation.date} ${parseInt(reservation.time) + 5}:00`
            }).then(() => window.location.reload())
        } else {
            console.log("it didnt work")
        }
    }

    return (
        <form className="col-12 col-sm-12 col-md-4 mt-3" onSubmit={handleSubmit}>
            <h1>Reserve a Table</h1>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input onChange={handleInputChange} name="name" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Party Size</label>
                <input onChange={handleInputChange} name="party" className="form-control" id="partySize" />
            </div>
            <div className="mb-3">
                <label className="form-label">Date of Reservation</label>
                <input type="date" onChange={handleInputChange} name="date" className="form-control" id="date" />
            </div>
            <div className="mb-3">
                <label className="form-label">Time of Reservation</label>
                <select name="time" onChange={handleInputChange} class="form-control">
                    <option value="selected">Select Time</option>
                    <option value="12:00">12:00 pm</option>
                    <option value="13:00">1:00 pm</option>
                    <option value="14:00">2:00 pm</option>
                    <option value="15:00">3:00 pm</option>
                    <option value="16:00">4:00 pm</option>
                    <option value="17:00">5:00 pm</option>
                    <option value="18:00">6:00 pm</option>
                    <option value="19:00">7:00 pm</option>
                </select>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    )
}

export default ReservationForm;