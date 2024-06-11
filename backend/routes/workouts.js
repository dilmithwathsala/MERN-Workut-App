const express = require("express");
const router = express.Router();
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
    
} = require("../controllers/workoutController");

// GET ALL workouts
router.get('/', getWorkouts)

// GET SINGLE workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE workout
router.delete("/:id", deleteWorkout)

// UPDATE workout
router.patch("/:id", updateWorkout)


module.exports = router