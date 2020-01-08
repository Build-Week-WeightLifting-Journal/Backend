const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findWorkouts,
  findByDate
};

function find() {
  return db('users').select('id', 'username', 'password', 'email');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  return await db('users').insert(user).returning('*');

  // return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}


function findWorkouts(id){
  return db('workout as w')
  .where({user_id: id})
  .join('users as u', 'u.id', 'w.user_id')
  .select('w.id','w.name', 'w.description', 'w.user_id', 'w.date')
}

  
function findByDate(id,date) {
  return db("workout")
    .select("id", "user_id","name", "description", "date")
    .where({user_id:id,date})
}



