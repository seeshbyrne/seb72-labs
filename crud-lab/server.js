
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");

const server = express();

//plugging in middleware so that express know someone may submit a form and it needs to be ready
//express doesnt process forms by default
server.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

const Jacket = require('./models/jacket.js');

server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, "public")));

//homepage
server.get("/", (req, res) => {
    res.render("index.ejs");
});

//GET // new
server.get("/jackets/new", (req, res) => {
    res.render("jackets/new.ejs");
});

//POST // create
server.post("/jackets", async (req, res) => {
    await Jacket.create(req.body);
    res.redirect("/jackets");
});

//GET //index
server.get("/jackets", async (req, res) => {
    const jackets = await Jacket.find({});
    res.render("jackets/index.ejs", { jackets: jackets });
});

//GET // show
server.get("/jackets/:id", async (req, res) => {
    const jacket = await Jacket.findById(req.params.id);
    res.render('jackets/show.ejs', {jacket: jacket});
});

// delete
server.delete("/jackets/:id", async (req, res) => {
    await Jacket.findByIdAndDelete(req.params.id);
    res.redirect('/jackets');
});

// edit
server.get('/jackets/:id/edit', async (req, res) => {
    const jacket = await Jacket.findById(req.params.id);
    res.render('jackets/edit.ejs', { jacket: jacket });
});

// update 
server.put('/jackets/:id', async (req, res) => {
    await Jacket.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/jackets/' + req.params.id);
})

/////////////////////////////////////////////////////////////////////////////////////////////////

server.listen(3000, () => {
    console.log('Listening on port http://localhost:3000/');
});