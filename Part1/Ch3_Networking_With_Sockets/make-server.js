'use strict';

const
    net = require('net'), 
    //net.createServer returns Server object
    server = net.createServer(connection => { // connection is Socket object used for communication
        process.stdout.write(typeof(connection));
        // Use the connection object for data transfer.
    });

//.listen binds the server object to the TCP port 60300
server.listen(60300, ()=> process.stdout.write('server is listening.'));
