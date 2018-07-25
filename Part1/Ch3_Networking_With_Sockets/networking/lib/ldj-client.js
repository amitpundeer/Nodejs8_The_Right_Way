'use strict';

const EventEmitter = require('events').EventEmitter;
class LDJClient extends EventEmitter {
    constructor(stream) {
        super();
        
        let buffer = '';

        stream.on('data', data=> {
            buffer += data;
            let boundary = buffer.indexOf('\n');
            
            while(boundary !== -1) {
                // Getting the data from socket object
                const input = buffer.substring(0, boundary);
                // Slearing and checking if the next message starts after \n 
                buffer = buffer.substring(boundary+1);
                // Emit the event as complete data is recieved in input
                this.emit('message', JSON.parse(input));
                // Adding \n to signify the end of prev message and start of new message
                boundary = buffer.indexOf('\n');
                }
            });
        }

        static connect(stream) {
            return new LDJClient(stream);
        }
}
module.exports = LDJClient;