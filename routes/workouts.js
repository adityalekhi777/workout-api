const express = require('express');
const router = express.Router();

const Workout = require('../model/workoutModel');
const workoutModel = require('../model/workoutModel');

router.get('/', function (req, res) {
  res.json({ msg: 'hello' });
});

router.post('/', async function (req, res) {
  const data = req.body;

  try {
    let workout = await workoutModel.create(data);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', function (req, res) {});

router.delete('/:id', function (req, res) {});

module.exports = router;
