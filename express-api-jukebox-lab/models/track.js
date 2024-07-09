const mongoose = require('mongoose');

// define a schema
// turn it into a model
// export the model

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Track', trackSchema);