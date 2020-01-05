
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128)
      .notNullable()
      .unique()
      tbl.string('password', 128)
      .notNullable()
      tbl.string('email', 128)
      .notNullable()
      .unique()
  })
  .createTable('workout', tbl => {
      tbl.increments()
      tbl.string('name', 128)
      .notNullable()
      tbl.string('description', 500)
      .notNullable()
  })
  .createTable('date', tbl => {
      tbl.increments()
      tbl.integer('date', 8)
      .notNullable()
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      tbl.integer('workout_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('workout')

  })
  .createtable('exercise', tbl => {
      tbl.increments()
      tbl.string('name', 128)
      .notNullable()
      tbl.integer('sets')
      .notNullable()
      .defaultTo(0)
      tbl.integer('reps')
      .notNullable()
      .defaultTo(0)
      tbl.integer('weight')
      .notNullable()
      .defaultTo(0)
      tbl.integer('workout_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('workout')
  })
};
// name of exercise, sets, reps, weight

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('exercise')
    .dropTableIfExists('date')
    .dropTableIfExists('workout')
    .dropTableIfExists('users')
};
