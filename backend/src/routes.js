const server = require('./server');


server.get("/",(req,res)=>{
    res.status(200).send("hello dev");
});
