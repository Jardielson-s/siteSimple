const server = require('./routes');
const socket = require('socket.io');
const http = require('http').createServer(server); 

const io = socket(http);
server.get('/socket.io',async(req,res)=>{
    
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

server.listen(8081,()=>{console.log("runnig in port 8081")});