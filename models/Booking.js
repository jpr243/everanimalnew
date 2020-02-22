const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  datefrom: {
    type: Date,
    required: true
  },
  departuretime: {
    type: Date,
    required: true
  },
  sitterarrive: {
    type: Date,
    required: true
  },
  dateto: {
    type: Date
  },
  returntime: {
    type: Date
  },
  sitterleave: {
    type: Date,
    required: true
  },
  keys: {
    type: String,
    required: true
  },
  money: {
    type: Number,
    required: true
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
