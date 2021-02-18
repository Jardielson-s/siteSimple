const express = require("express");

const server = express();
server.use(express.json());

const  controllers  = require('./Controllers/Controllers');

server.post('/singUp',controllers.singUp);
server.post('/singIn',controllers.singIn);
server.get('/deleteAll',controllers.delete);
server.get('/get',controllers.get);
server.get('/destroy/:id',controllers.destroy);

module.exports = server;

