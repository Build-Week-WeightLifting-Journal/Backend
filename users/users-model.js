const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findWorkouts
};

function find() {
  return db('users').select('id', 'username', 'password', 'email');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

// function findWorkouts(id){
//   return db('exercise as e')
//   .where({workout_id: id})
//   .join('workout as w', 'w.id', 'e.workout_id')
//   .select('e.id','e.name', 'e.sets', 'e.reps', 'e.workout_id')
// }

function findWorkouts(id){
  return db('workout as w')
  .where({user_id: id})
  .join('users as u', 'u.id', 'w.user_id')
  .select('w.id','w.name', 'w.description', 'w.user_id')
}
