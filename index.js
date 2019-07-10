if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const path = require('path');
const express = require('express');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});
