let mongoose = require('mongoose');

let schema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    sentAt: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('message', schema);