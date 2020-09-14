const EventEmitter = require('events');
const url = 'https://google.com';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP Request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url });
    }
}

module.exports = Logger;