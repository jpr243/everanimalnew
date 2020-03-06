const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  address: {
    type: String
  },
  suburb: {
    type: String
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
    type: String
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
  pet: [
    {
      petname: {
        type: String,
        required: true
      },
      animal: {
        type: String,
        required: true
      },
      breed: {
        type: String,
        required: true
      },
      sex: {
        type: String,
        required: true
      },
      desexed: {
        type: String
      },
      microchipped: {
        type: String
      },
      registered: {
        type: String
      },
      rescuepet: {
        type: String
      },
      age: {
        type: Number,
        required: true
      },
      vaccinations: {
        type: String
      },
      allergies: {
        type: String
      },
      healthconditions: {
        type: String
      },
      medication: {
        type: String
      }
    }
  ],
  booking: [
    {
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
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
