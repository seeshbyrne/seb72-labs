
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const server = express();

//plugging in middleware so that express know someone may submit a form and it needs to be ready
//express doesnt process forms by default
server.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

const Shoe = require('./models/shoe.js');

//landing page
server.get("/", async (req, res) => {
    res.render("index.ejs");
});

//GET /shoes/new
server.get("/shoes/new", (req, res) => {
    res.render("shoes/new.ejs");
});

server.listen(3000, () => {
    console.log('Listening on port http://localhost:3000/');
});