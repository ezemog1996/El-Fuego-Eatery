import axios from "axios";

export default {
  // Gets books from the Google API
  getReservations: function(q) {
    return axios.get("/api/reservations");
  },
  // Saves an book to the database
  reserve: function(reservation) {
    return axios.post("/api/reservations", reservation);
  },

  deleteReservation: function(reservation) {
    return axios.delete("/api/reservations/" + reservation);
  }
};
