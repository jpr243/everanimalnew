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
    type: Date,
  },
  sitterarrive: {
    type: Date,
   // required: true
  },
  dateto: {
    type: Date,
    required: true
  },
  returntime: {
    type: Date
  },
  sitterleave: {
    type: Date,
  //  required: true
  },
  keysleft: {
    type: String,
  },
  money: {
    type: Number,
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
