
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const morgan = require("morgan");

const server = express();

//plugging in middleware so that express know someone may submit a form and it needs to be ready
//express doesnt process forms by default
server.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

const Shoe = require('./models/shoe.js');

server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));
server.use(morgan('dev'));

//homepage
server.get("/", (req, res) => {
    res.render("index.ejs");
});

//GET // new
server.get("/shoes/new", (req, res) => {
    res.render("shoes/new.ejs");
});

//POST // create
server.post("/shoes", async (req, res) => {
    await Shoe.create(req.body);
    res.redirect("/shoes");
});

//GET //index
server.get("/shoes", async (req, res) => {
    const shoes = await Shoe.find({});
    res.render("shoes/index.ejs", { shoes: shoes });
});

//GET // show
server.get("/shoes/:id", async (req, res) => {
    const shoe = await Shoe.findById(req.params.id);
    res.render('shoes/show.ejs', {shoe: shoe});
});

// delete
server.delete("/shoes/:id", async (req, res) => {
    await Shoe.findByIdAndDelete(req.params.id);
    res.redirect('/shoes');
});

// edit
server.get('/shoes/:id/edit', async (req, res) => {
    const shoe = await Shoe.findById(req.params.id);
    res.render('shoes/edit.ejs', { shoe: shoe });
});

// update 
server.put('/shoes/:id', async (req, res) => {
    await Shoe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/shoes/' + req.params.id);
})

/////////////////////////////////////////////////////////////////////////////////////////////////

server.listen(3000, () => {
    console.log('Listening on port http://localhost:3000/');
});