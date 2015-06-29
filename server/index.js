var DeepstreamServer = require('deepstream.io');
var server =  new DeepstreamServer();

server.set('host', 'localhost');
server.set('port', 6020);

server.start();
