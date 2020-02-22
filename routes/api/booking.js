const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

const Booking = require('../../models/Booking');

router.post('/', async (req, res) => {
  try {
    let newBooking = new Booking(req.body);
    let savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (e) {
    res.json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let BookingId = req.params.id;
    let foundBooking = await Booking.findOne({ _id: BookingId });
    console.log(foundBooking);
    res.json(foundBooking);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let BookingId = req.params.id;
    await Booking.deleteOne({ _id: BookingId });
    res.send('Booking removed.');
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let BookingId = req.params.id;
    let foundBooking = await Booking.findOne({ _id: BookingId });
    if (foundBooking == null) {
      res.send('Booking not found.');
    } else {
      foundBooking.set(req.body);
      let updatedBooking = await foundBooking.save();
      res.json(updatedBooking);
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
