const { User, validate } = require("../models/user");
const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router()


router.post("/signup", (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    User.findOne({"email": req.body.email}, function(err,obj) {
        if (err){
            return res.status(500).send({message: err});
        }
        if(obj){
            return res.status(400).send("User with this email already exists");
        }
    });

    User.findOne({"nickname": req.body.nickname}, function(err, obj){
        if (err){
            return res.status(500).send({message: err});
        }
        if(obj){
            return res.status(400).send("User with this nickname already exists :(");
        }
    });
    
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        last_login: new Date()
    });

    bcrypt.hash(user.password, 10, function(err, hash){
        if (err){
            return res.status(500).send({message: err});
        }
        else{
            user.password  = hash;
            user.save(function(err, _){
                if (err){
                    return res.status(500).send("There was a problem");
                }
                else{
                    return res.status(201).send("User was created successfully");
                }
            });
        }
    });



});

module.exports = router;