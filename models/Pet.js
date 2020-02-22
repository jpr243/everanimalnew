const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
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
    type: String,
    required: true
  },
  microchipped: {
    type: String,
    required: true
  },
  registered: {
    type: Boolean,
    default: false
  },
  rescuepet: {
    type: Boolean,
    default: false
  },
  age: {
    type: Number,
    required: true
  },
  vaccinations: {
    type: Boolean,
    default: true
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
});

module.exports = Pets = mongoose.model('pet', PetSchema);
