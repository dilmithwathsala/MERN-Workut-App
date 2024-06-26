require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();


// middleware
app.use(express.json());   // to accept json data from body 
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {    
    // Listen to port
    app.listen(process.env.PORT, () => {
        console.log(`connected to db & listening on port`, process.env.PORT)
    })    
})
    .catch((err) => {
        console.log(err);
    })


// routes
app.use("/api/workouts", workoutRoutes);





