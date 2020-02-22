const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

const Pet = require('../../models/Pet');

router.post('/', async (req, res) => {
  try {
    let newPet = new Pet(req.body);
    let savedPet = await newPet.save();
    res.json(savedPet);
  } catch (e) {
    res.json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let petId = req.params.id;
    let foundPet = await Pet.findOne({ _id: petId });
    console.log(foundPet);
    res.json(foundPet);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let petId = req.params.id;
    await Pet.deleteOne({ _id: petId });
    res.send('Pet removed.');
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let petId = req.params.id;
    let foundPet = await Pet.findOne({ _id: petId });
    if (foundPet == null) {
      res.send('Pet not found.');
    } else {
      foundPet.set(req.body);
      let updatedPet = await foundPet.save();
      res.json(updatedPet);
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
