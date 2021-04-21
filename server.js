//bring in the node modules that we need
const fs = require('fs');
const express = require('express');
const server = express();
const portNumber=80
//define and activate the server
server.use(express.static('public', {
    extensions: ['html']
}));

server.listen(portNumber, err => console.log(err || `Server is Active on Port ${portNumber}`));





