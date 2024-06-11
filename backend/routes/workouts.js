const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

// GET ALL workouts
router.get("/", (req, res) => {
    res.json({message: "Get All workoutes"})
})

// GET SINGLE workout
router.get('/:id', (req, res) => {
    res.json({message: `Get Single workout`})
})

// POST a new workout
router.post('/', async (req, res) => {
    const{title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


// DELETE workout
router.delete("/:id", (req, res) => {
    res.json({message: `Delete workout with ID ${req.params.id}`})
})


// UPDATE workout
router.patch("/:id", (req, res) => {
    res.json({message: `Update workout with ID ${req.params.id}`})  
})


module.exports = router