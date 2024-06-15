const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: String,
    style: String,
    colour: String,
});

const Shoe = mongoose.model("Shoe", shoeSchema);
module.exports = Shoe;