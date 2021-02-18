const server = require('./server');


const   controllers  = require('./Controllers/Controllers');

server.post('/singUp',controllers.singUp);

server.listen(8081,()=>console.log("running port 8081"));