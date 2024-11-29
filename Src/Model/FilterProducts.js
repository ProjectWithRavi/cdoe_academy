const mongoose = require('mongoose');

const schema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
})

const model = mongoose.model('productFilter', schema);

module.exports = model;
