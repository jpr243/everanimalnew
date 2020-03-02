const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

const Booking = require('../../models/Booking');
const User = require('../../models/User');

//@route  GET api/booking
//@desc   Get current users booking
//@access Private

router.get('/', auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      user: req.user.id
    }).populate('user', ['datefrom', 'dateto']);
    if (!booking) {
      return res.status(400).json({ msg: 'There is no booking for this user' });
    }
    res.json(booking);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/booking
// @desc     Create or update user booking
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('datefrom', 'Your departure date is required')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
       check('sitterarrive', 'Sitters arrival time is required')
         .not()
         .isEmpty(),
      check('dateto', 'Your arrival date is required')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
      check('sitterleave', 'You must tell us what time you wish the sitter to leave')
         .not()
         .isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      datefrom,
      departuretime,
      sitterarrive,
      dateto,
      returntime,
      sitterleave,
      keysleft,
      money
    } = req.body;

    const bookingFields = {
      user: req.user.id,
      datefrom,
      departuretime,
      sitterarrive,
      dateto,
      returntime,
      sitterleave,
      keysleft,
      money
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let booking = await Booking.findOneAndUpdate(
        { user: req.user.id },
        { $set: bookingFields },
        { new: true, upsert: true }
      );
      res.json(booking);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/booking
// @desc     Get all bookings
// @access   Public
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', [
      'datefrom',
      'dateto'
    ]);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  GET api/booking/user/:user_id
//@desc   Get booking by user ID
//@access Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const booking = await Booking.findOne({
      user: req.params.user_id
    }).populate('user', ['datefrom', 'dateto']);

    if (!booking) return res.status(400).json({ msg: 'Booking not found' });

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Booking not found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route  DELETE api/booking
//@desc   Delete booking
//@access Private

router.delete('/', auth, async (req, res) => {
  try {
    //Remove booking
    await Booking.findOneAndRemove({ user: req.user.id });
    res.json({ msg: 'Booking deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
