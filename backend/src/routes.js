const express = require("express");
const { authenticate } = require("./Controllers/Auth");
const Auth = require('./Controllers/Auth');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

const  controllers  = require('./Controllers/Controllers');

server.post('/singUp',controllers.singUp);
server.post('/singIn',controllers.singIn);
server.get('/deleteAll',Auth.authenticate,controllers.delete);
server.get('/get',controllers.get);
server.get('/destroy/:id',Auth.authenticate,controllers.destroy);
server.get('/sarch',Auth.authenticate,controllers.sarch);

module.exports = server;

