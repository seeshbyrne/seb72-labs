require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');

const tracksController = require('./controllers/tracks');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB ' + mongoose.connection.name);
});

server.use(express.json()); // this gets the data and turns it into req.body
server.use(cors()); // Access-Control-Allow-Origin: *

// DEFINE ROUTES HERE (but actually in the controllers)

server.use('/tracks', tracksController);

server.listen(3000,  () => {
    console.log('Server is running at http://localhost:3000/');
});