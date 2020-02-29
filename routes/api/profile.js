const express = require('express');
const router = express.Router();
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
    const profile = await (
      await Profile.findOne({ user: req.user.id })
    ).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/profile
// @desc Create or update user profile
//

router.post('/', auth, async (req, res) => {
  try {
    let newProfile = new Profile(req.body);
    let savedProfile = await newProfile.save();
    res.json(savedProfile);
  } catch (e) {
    res.json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let profileId = req.params.id;
    let foundProfile = await Profile.findOne({ _id: profileId });
    console.log(foundProfile);
    res.json(foundProfile);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let profileId = req.params.id;
    await Profile.deleteOne({ _id: profileId });
    res.send('Profile deleted.');
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    let profileId = req.params.id;
    let foundProfile = await Profile.findOne({ _id: profileId });
    if (foundProfile == null) {
      res.send('Profile not found.');
    } else {
      foundProfile.set(req.body);
      let updatedProfile = await foundProfile.save();
      res.json(updatedProfile);
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
