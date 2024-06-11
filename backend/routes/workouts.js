const express = require("express");
const router = express.Router();
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require("../controllers/workoutController");

// GET ALL workouts
router.get('/', getWorkouts)

// GET SINGLE workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE workout
router.delete("/:id", (req, res) => {
    res.json({message: `Delete workout with ID`})
})


// UPDATE workout
router.patch("/:id", (req, res) => {
    res.json({message: `Update workout with ID`})  
})


module.exports = router