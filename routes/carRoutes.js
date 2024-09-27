const router = require('express').Router();

const db = require('../data/dbConfig');

router.get('/', (req, res) => {
  db('*').from('cars')
    .then(cars => {
      // console.log(cars);
      res.status(200).send(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({message: 'There was an error in getting cars from the database'});
    })
});

router.post('/', (req,res) => {
  const car = req.body;
  console.log(car);

  db('cars').insert(car)
    .then(carId => {
      // console.log(carId);
      res.status(201).send('Car created');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'There was an error in creating a car'});
    })
});

module.exports = router;

