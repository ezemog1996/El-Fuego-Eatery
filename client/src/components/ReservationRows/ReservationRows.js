import React from "react";
import API from "../../utils/API";

function ReservationRows({ reservation }) {

    function deleteReservation(id) {
        API.deleteReservation(id)
            .then(() => window.location.reload());
    }

    return (
        <tr key={reservation._id}>
        <th scope="row">{reservation._id}</th>
        <td>{reservation.name}</td>
        <td>{reservation.party}</td>
        <td>{reservation.date}</td>
        <td>{reservation.time}</td>
        <td><i onClick={() => deleteReservation(reservation._id)} style={{cursor: "pointer"}} className="fas fa-check text-success"></i></td>
        <td><i onClick={() => deleteReservation(reservation._id)} style={{cursor: "pointer"}} class="fas fa-times text-danger"></i></td>
        </tr>    
    )
};

export default ReservationRows;