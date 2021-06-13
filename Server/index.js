const PORT = 3000 || process.env.PORT;
const PATH_TO_DB = 'mongodb://localhost/chat';
const NG_URI = "http://localhost:4200"

const APP = require('express')();
const HTTP = require('http');
const SERVER = HTTP.createServer(APP);
const { Server } = require("socket.io");
const IO = new Server(SERVER, {
    cors: {
        origin: NG_URI
    }
});

const MONGOOSE = require('mongoose');
const MONGO = MONGOOSE.connect(PATH_TO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

MONGO.then(() => {
    console.log('Connected to DB');
}, error => {
    console.log(error, 'error');
});

APP.use((__, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});

let messageController = require('./controllers/message-controller');

IO.on('connection', socket => {
    console.log('A new user connected.');
    // messageController.getAll(socket, IO);

    socket.on('message', message => {
        messageController.create(message, socket, IO);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

SERVER.listen(PORT, () => {
    console.log(`Server is listening for connections on port ${PORT}`);
});