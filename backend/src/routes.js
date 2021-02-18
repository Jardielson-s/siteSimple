const server = require('./server');


const   controllers  = require('./Controllers/Controllers');

server.post('/singUp',controllers.singUp);
server.post('/singIn',controllers.singIn);
server.get('/deleteAll',controllers.delete);


module.exports = server;