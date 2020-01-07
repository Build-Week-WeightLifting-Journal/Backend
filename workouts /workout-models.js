const db = require('../database/db-config.js')

module.exports = {
    add, 
    find,
    findExercises,
    findById,
    update,
    remove
}

function find() {
    return db('workout').select("id", "name", "description")
}
  
function findById(id) {
    return db("workout")
      .select("id", "name", "description")
      .where({ id })
      .first();
  }
function findExercises(id){
    return db('exercise as e')
    .where({workout_id: id})
    .join('workout as w', 'w.id', 'e.workout_id')
    .select('e.id','e.name', 'e.sets', 'e.reps', 'e.weight', 'e.workout_id')
}

function add(workout) {
    return db('workout')
    .insert(workout)
    .then(ids => {
        const [id] = ids;
        return findById(id);
      });

}

function update(id, changes) {
    return db('workout')
      .where('id', id)
      .update(changes)

  }

  function remove(id) {
    return db('workout')
      .where('id', id)
      .del();
  }