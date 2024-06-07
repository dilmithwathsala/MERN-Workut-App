require("dotenv").config();


const express = require("express");

//express app
const app = express();

// routes
app.get("/", (req, res) => {
    res.send("Home Page");
})


// Listen to port
app.listen(process.env.PORT, () => {
    console.log(`Server started on port`, process.env.PORT)
});


