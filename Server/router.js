const ROUTER = require('express').Router();

ROUTER.get('/', (__, response) => response.json({ status: "Up", messsage: "Welcome to InstantMessenger Application." }));

let messageController = require('./controllers/message-controller');

module.exports = ROUTER;