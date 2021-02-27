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
server.delete('/deleteAll',Auth.authenticate,controllers.delete);
server.get('/get',Auth.authenticate,controllers.get);
server.delete('/destroy/:id',Auth.authenticate,controllers.destroy);
server.delete('/delete/:id',controllers.delete);
server.get('/sarch',Auth.authenticate,controllers.sarch);

module.exports = server;

