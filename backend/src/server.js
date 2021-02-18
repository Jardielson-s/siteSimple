const express = require("express");

const server = express();


server.listen(8081,()=>console.log("running port 8081"));

module.exports = server;