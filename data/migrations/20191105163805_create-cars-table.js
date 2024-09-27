
exports.up = function(knex) {
  return knex.schema.createTable('cars', function (table) {
    table.increments();
    table.string('VIN', 128).unique().notNullable();
    table.string('make', 64).notNullable();
    table.string('model', 64).notNullable();
    table.integer('mileage').notNullable();
    table.string('transmissionType', 64);
    table.string('status', 64);
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};


