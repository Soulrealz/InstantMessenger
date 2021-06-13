const { User, validate } = require("../models/user");
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  username = req.body.username;
  password = "";

  password = bcrypt.hashSync(req.body.password, 10);
  User.findOne({ username: username, password: password }, function (err, obj) {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!obj) {
      return res.status(400).send("Wrong credentials");
    }
  });
});
