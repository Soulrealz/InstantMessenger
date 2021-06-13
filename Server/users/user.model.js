const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {type: String, unique: true, required: true},
    hashPassword: {type: String, required: true},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    creationDate: {type: Date, default: Date.now},
    lastLoginDate: {type: Date}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
        delete ret.hashPassword;
    }
});

module.exports = mongoose.model('User', schema);