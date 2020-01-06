const express = require('express');

const apiRouter = require('./api-router.js')

const server = express();


server.get('/', (req, res) => {
  res.send("Last BW Sanity Check :)");
});

server.use(express.json());

server.use('/api', apiRouter)



module.exports = server;

