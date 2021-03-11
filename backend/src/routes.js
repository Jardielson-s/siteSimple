const express = require("express");
const { authenticate } = require("./Controllers/Auth");
const Auth = require('./Controllers/Auth');
const cors = require('cors');
const  controllers  = require('./Controllers/Controllers');



const server = express();

server.use((req, res, next) => {

	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    server.use(cors());

    next();
}); 

server.use(express.json());


   


server.post('/singUp',controllers.singUp);
server.post('/singIn',controllers.singIn);
server.delete('/deleteAll',Auth.authenticate,controllers.delete);
server.get('/get',Auth.authenticate,controllers.get);
server.delete('/destroy/:id',Auth.authenticate,controllers.destroy);
server.delete('/delete/:id',controllers.delete);
server.get('/sarch',Auth.authenticate,controllers.sarch);
server.get('/socket.io',controllers.chat)

module.exports = server;