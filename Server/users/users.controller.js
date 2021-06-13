const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/register', register);
router.get('/current', getCurrent);
router.get('/:nickname', getByUsername);
router.put('/:nickname', update);


module.exports = router;

function register(req, res, next){
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getCurrent(req, res, next){
    userService.getByUsername(req.user.username)
        .then(user => user ? res.json(user) : err => next(err));
}

function getByUsername(req, res, next){
    userService.getByUsername(req.params.username)
        .then(user => user ? res.json(user) : err => next(err));
}

function update(req, res, next){
    userService.update(req.params.username, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}