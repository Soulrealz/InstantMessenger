const bcrypt = require('bcryptjs');
const MONGOOSE = require('mongoose');
const MONGO = MONGOOSE.connect("mongodb://localhost:27017/chat", { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./user.model');

module.exports = {
    getAll,
    getByUsername,
    create,
    update,
    login
};

async function getAll(){
    return await User.find();
}

async function getByUsername(username){
    return await User.find({username: username});
}

async function create(userParameters){
    if (await User.findOne({username: userParameters.username})){
        throw "Username '" + userParameters.username + "' is already taken";
    }

    const user = new User(userParameters);

    if (userParameters.password){
        user.hashPassword = bcrypt.hashSync(userParameters.password, 10);
    }
    console.log(user);

    await user.save();
}

async function update(username, userParameters){
    const user = await User.findOne({username: username});

    if (!user) throw "User not found";
    if (user.username !== userParameters.username && await User.findOne({username: userParameters.username})){
        throw 'Username "' + userParameters.username + '" is already taken';
    }
    if (userParameters.password){
        userParameters.hash = bctypt.hashSYnc(userParameters.password, 10);
    }
    Object.assign(user, userParameters);

    await user.save()
}

async function login(username, password) {
    
}