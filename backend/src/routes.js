const express = require("express");
const { authenticate } = require("./Controllers/Auth");
const path = require('path');
const Auth = require('./Controllers/Auth');
const cors = require('cors');

require('events').EventEmitter.defaultMaxListeners = 100;
const app = express();
app.use(express.json());
app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const  controllers  = require('./Controllers/Controllers');

/*
server.post('/singUp',controllers.singUp);
server.post('/singIn',controllers.singIn);
server.delete('/deleteAll',Auth.authenticate,controllers.delete);
server.get('/get',Auth.authenticate,controllers.get);
server.delete('/destroy/:id',Auth.authenticate,controllers.destroy);
server.delete('/delete/:id',controllers.delete);
server.get('/sarch',Auth.authenticate,controllers.sarch);
*/
io.on('connection',(socket)=>{
    socket.on('chat.message',(data)=>{
        console.log('[SOCKE] chat.message => ', data);
        io.emit('chat.message',data);
    })
    socket.on('disconnect',()=>{
        console.log('[SOCKT] disconnect');
    });
})

app.get('/socket.io',(req,res)=>{
    
    io.on('connection',(socket)=>{
        socket.on('chat.message',(data)=>{
            console.log('[SOCKE] chat.message => ', data);
            io.emit('chat.message',data);
        })
        socket.on('disconnect',()=>{
            console.log('[SOCKT] disconnect');
        });
    })
    return res.status(200).send('[IO] Connection => server has new connection')
});

app.listen(8081);

//module.exports = server;

