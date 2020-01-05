const express = require('express');

const server = express();

server.use(express.json());

// server.use('/api/auth', authRouter);
// server.use('/api/jokes', authenticate, jokesRouter);

server.get('/', (req, res) => {
    res.send("Last BW Sanity Check");
  });

module.exports = server;

