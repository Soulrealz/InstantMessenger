const PORT = 3000;
const PATH_TO_DB = 'mongodb://localhost:27017/chat';

const JOI = require('joi');
JOI.objectId = require('joi-objectid')(JOI);
const USERS = require('./routes/users');
const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP);
const { Server } = require('socket.io');
const MONGOOSE = require('mongoose');
const IO = new Server(SERVER);

const MONGO = MONGOOSE.connect(PATH_TO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

IO.on('connection', (socket) => {
    console.log('A new client connected.');

    socket.emit('test', 'Test event emitted.');
});

APP.use(EXPRESS.urlencoded({extended: true})); 
APP.use(EXPRESS.json());

APP.use((__, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
})

APP.use('/auth/', USERS)

APP.get('/', (__, response) => response.json({ status: 'Up & Running', message: 'Welcome to InstantMessenger.'}));

APP.listen(PORT, () => {
    console.log(`Server is listening for connections on port ${PORT}`);
});

MONGO.then(() => {
    console.log('Connected to DB');
}, error => {
    console.log(error, 'error');
});

