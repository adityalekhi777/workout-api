const mongoose = require('mongoose');
const Workout = require('../model/workoutModel');

async function getSingleWorkout(req, res) {
    let id = req.params.id;
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({msg:"Wrong ID format"})
    }else{
        let data = await Workout.findById(id);
        if(!data){
            return res.status(404).json({msg:"No Data found"})
        }
        return res.status(200).json(data); 
    }
}

async function getAllWorkouts(req, res) {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

async function postWorkout(req, res) {
    const data = req.body;

    try {
      let workout = await Workout.create(data);
      res.status(200).json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

async function updateWorkout(req, res) {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout);
}

async function deleteWorkout(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
}



module.exports = {getSingleWorkout, getAllWorkouts, postWorkout,updateWorkout,deleteWorkout}