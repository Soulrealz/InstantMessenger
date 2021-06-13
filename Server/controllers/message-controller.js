let Message = require('../models/message');

exports.getAll = async (socket, io) => {
    Message.find((error, messages) => {
        if (error) {
            return io.emit('error', error);
        }

        return socket.emit('load-history', messages);
    });
};

exports.getById = (request, response) => {
    Message.findById(request.params.id, (error, message) => {
        if (error) {
            return response.error(404).send(error);
        }

        response.status(200).json(message);
    });
}

exports.create = async (message, socket, io) => {
    if (!message) { 
        return;
    }

    const record = new Message();
    record.content = message.content;
    record.author = message.author;
    record.sentAt = message.sentAt;

    record.save((error, saved) => {
        if (error) {
            return io.emit('error', error);
        }

        return socket.broadcast.emit('message-created', saved);
    });
};

exports.deleteById = (request, response) => {
    Message.deleteOne({ _id: request.params.id }, (error, __) => {
        if (error) {
            return response.status(404).send(error);
        }

        response.status(204).json({
            message: `Message with ${request.params.id} has been deleted successfully`
        });
    });
};