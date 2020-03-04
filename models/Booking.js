const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  datefrom: {
    type: Date,
    required: true
  },
  departuretime: {
    type: String
  },
  sitterarrive: {
    type: String,
    required: true
  },
  dateto: {
    type: Date,
    required: true
  },
  returntime: {
    type: String
  },
  sitterleave: {
    type: String
  },
  keysleft: {
    type: String
  },
  money: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
