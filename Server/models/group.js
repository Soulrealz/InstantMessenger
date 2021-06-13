let mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    users: [{ type: String, unique: true }]
});

module.exports = mongoose.model('group', schema);