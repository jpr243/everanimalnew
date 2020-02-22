const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  address: {
    housenumber: {
      type: Number,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    suburb: {
      type: String,
      required: true
    }
  },
  phone: {
    type: Number,
    required: true
  },
  emergencycontact: {
    name: {
      type: String,
      required: true
    },
    relationship: {
      type: String
    },
    phone: {
      type: Number,
      required: true
    },
    email: {
      type: String
    }
  },
  vet: {
    practicename: {
      type: String,
      required: true
    },
    address: {
      housenumber: {
        type: Number
      },
      street: {
        type: String
      },
      suburb: {
        type: String
      }
    },
    phone: {
      type: Number,
      required: true
    }
  },
  housedetails: {
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
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
