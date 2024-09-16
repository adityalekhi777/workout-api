const express = require('express');
const router = express.Router();


const methods = require("../controller/workoutController");

router.get('/', methods.getAllWorkouts);

router.get('/:id',methods.getSingleWorkout );

router.post('/', methods.postWorkout);

router.patch('/:id', methods.updateWorkout);

router.delete('/:id',methods.deleteWorkout );

module.exports = router;
