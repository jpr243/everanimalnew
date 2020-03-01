const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  address: {
    type: String,
  },
  suburb: {
    type: String,
  },
  phone: {
    type: Number,
    required: true
  },
  emergencycontact: {
    type: String,
    required: true
  },
  relationship: {
    type: String
  },
  emergencyphone: {
    type: Number,
    required: true
  },
  emergencyemail: {
    type: String
  },
  vetname: {
    type: String,
    required: true
  },
  vetaddress: {
    type: Number
  },
  vetstreet: {
    type: String
  },
  vetsuburb: {
    type: String
  },
  vetphone: {
    type: Number,
    required: true
  },
  securitycompany: {
    type: String
  },
  cctv: {
    type: Boolean,
    default: false
  },
  sparekeylocation: {
    type: String
  },
  wifinetwork: {
    type: Boolean,
    default: false
  },
  wifipassword: {
    type: String
  },
  mailpreference: {
    type: String
  },
  parking: {
    type: String
  },
  reticulation: {
    type: String
  },
  rubbishdays: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
