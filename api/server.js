const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config() // means we can create a dotenv file


const apiRouter = require('./api-router.js')

const server = express();


server.get('/', (req, res) => {
  res.send("Last BW Sanity Check :)");
});

server.use(express.json());

server.use('/api', apiRouter)



module.exports = server;

