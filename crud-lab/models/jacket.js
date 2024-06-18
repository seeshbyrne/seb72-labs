const mongoose = require('mongoose');

const jacketSchema = new mongoose.Schema({
    name: String,
    style: String,
    colour: String,
});

const Jacket = mongoose.model("Jacket", jacketSchema);
module.exports = Jacket;