// define the shape of our data
//compile that schema into the actual model
//export the model (so it can be used elsewhere)

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

//now the model
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
// the only thing that will change in new projects is the word fruit