const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  GET api/profile/me
//@desc   Get current users profile
//@access Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('phone', 'Your contact no. is required')
        .not()
        .isEmpty(),
      check('emergencycontact', 'Emergency contact name is required')
        .not()
        .isEmpty(),
      check('emergencyphone', 'Emergency contact no. is required')
        .not()
        .isEmpty(),
      check('vetname', 'Surgery name is required')
        .not()
        .isEmpty(),
      check('vetphone', 'Vet contact no. is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      address,
      suburb,
      phone,
      emergencycontact,
      relationship,
      emergencyphone,
      emergencyemail,
      vetname,
      vetaddress,
      vetsuburb,
      vetphone
    } = req.body;

    const profileFields = {
      user: req.user.id,
      address,
      suburb,
      phone,
      emergencycontact,
      relationship,
      emergencyphone,
      emergencyemail,
      vetname,
      vetaddress,
      vetsuburb,
      vetphone
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
//router.get('/', async (req, res) => {
// try {
//   const profiles = await Profile.find().populate('user', ['name']);
//   res.json(profiles);
// } catch (err) {
//   console.error(err.message);
//   res.status(500).send('Server Error');
// }
//});

//@route  GET api/profile/user/:user_id
//@desc   Get profile by user ID
//@access Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route  DELETE api/profile
//@desc   Delete profile and user
//@access Private

router.delete('/', auth, async (req, res) => {
  try {
    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  PUT api/profile/pet
//@desc   Add pet to profile
//@access Private

router.put(
  '/pet',
  [
    auth,
    [
      check('petname', 'Your pets name is required')
        .not()
        .isEmpty(),
      check('animal', 'Type of animal is required')
        .not()
        .isEmpty(),
      check('breed', 'Your pets breed is required')
        .not()
        .isEmpty(),
      check('sex', 'Your pets sex is required')
        .not()
        .isEmpty(),
      check('age', 'Your pets age is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      petname,
      animal,
      breed,
      sex,
      desexed,
      microchipped,
      registered,
      rescuepet,
      age,
      vaccinations,
      allergies,
      healthconditions,
      medication
    } = req.body;

    const newPet = {
      petname,
      animal,
      breed,
      sex,
      desexed,
      microchipped,
      registered,
      rescuepet,
      age,
      vaccinations,
      allergies,
      healthconditions,
      medication
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.pet.unshift(newPet);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
//====================================================================
//NEED TO FIX DELETE
//@route  DELETE api/profile/pet/:pet_id
//@desc   Delete pet from profile
//@access Private

router.delete('/pet/:pet_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.pet
      .map(item => item.id)
      .indexOf(req.params.pet_id);

    profile.pet.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//

module.exports = router;
