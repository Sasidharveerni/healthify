const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Hey your healthcare server is up and running!!")
})

app.listen(process.env.port, (req, res) => {
    mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log("Hey your healthcare database is connected!!")
    }).catch((err) => {
        console.error("Error in connecting database!!")
    })
})