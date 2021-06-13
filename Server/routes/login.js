const { User, validate } = require("../models/user");
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  nickname = req.body.nickname;
  password = "";

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      return res.status(500).send({ message: err });
    } else {
      password = hash;
    }
  });
  User.findOne({ nickname: nickname, password: password }, function (err, obj) {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!obj) {
      return res.status(400).send("Wrong credentials");
    }
  });
});
