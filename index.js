require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  console.log('meh');
});

server.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});
