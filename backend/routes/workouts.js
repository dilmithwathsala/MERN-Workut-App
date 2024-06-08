const express = require("express");
const router = express.Router();


// GET ALL workouts
router.get("/", (req, res) => {
    res.json({message: "Get All workoutes"})
})


// GET SINGLE workout
router.get("/:id", (req, res) => {
    res.json({message: `Get Single workout with ID ${req.params.id}`})
})


// POST new workout
router.post("/", (req, res) => {
    res.json({message: "Create new workout"})
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