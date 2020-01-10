//subject to change
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
    tbl.date('date')
    tbl.string('name', 128)
    .notNullable()
    tbl.string('description', 500)
    .notNullable()
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete("CASCADE")

})


  .createTable('exercise', tbl => {
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
      .onDelete('CASCADE')
  })

  
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('exercise')
    .dropTableIfExists('workout')
    .dropTableIfExists('users')
};



