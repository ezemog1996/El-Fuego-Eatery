const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name for your reservation"
  },
  party: {
    type: Number,
    required: "Enter how many people in your party"
  },
  reservation: {
    type: Date,
    required: "Enter the date and time you would like to reserve"
  }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
