const express = require('express');
const helmet = require('helmet');

const carsRoute = require('./routes/carRoutes');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/cars', carsRoute);

server.get('/', (req, res) => {
  res.status(200).send({message: 'Go to /cars'});
});

module.exports = server;
