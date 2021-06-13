const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        firstName: {
            type : String,
            required : true
        },
        lastName: {
            type : String,
            required : true
        },
        nickname: {
            type : String,
            required : true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 8
        },
        last_login: {
            type: Date,
        }
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }));

function validateUser(user){
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        nickname: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(8).max(16).required()
    });

    return schema.validate(user)
}

exports.User = User;
exports.validate = validateUser;