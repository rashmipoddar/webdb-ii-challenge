
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '123ABC', make: 'Maruti', model: 'Wagon R', mileage: '500'},
        {VIN: '123DEF', make: 'Tata', model: 'Jaguar', mileage: '600'},
        {VIN: '123ACS', make: 'Tesla', model: 'New', mileage: '700'},
      ]);
    });
};
