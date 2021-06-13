const PORT = 3000;
const PATH_TO_DB = 'mongodb://localhost:27017/chat';

const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP);
const { Server } = require('socket.io');
const MONGOOSE = require('mongoose');
const IO = new Server(SERVER);
const errorHandler = require('./_helpers/error-handler')

const MONGO = MONGOOSE.connect(PATH_TO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

IO.on('connection', (socket) => {
    console.log('A new client connected.');

    socket.emit('test', 'Test event emitted.');
});
APP.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

APP.use(EXPRESS.urlencoded({extended: true})); 
APP.use(EXPRESS.json());
APP.use('/users', require('./users/users.controller'));
APP.use(errorHandler)
APP.use((__, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
})

APP.get('/', (__, response) => response.json({ status: 'Up & Running', message: 'Welcome to InstantMessenger.'}));

APP.listen(PORT, () => {
    console.log(`Server is listening for connections on port ${PORT}`);
});

MONGO.then(() => {
    console.log('Connected to DB');
}, error => {
    console.log(error, 'error');
});

module.exports = MONGO;