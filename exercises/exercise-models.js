const db = require('../database/db-config.js');

module.exports = {
    add, 
    findById,
    update,
    remove
}

function findById(id) {
    return db("exercise")
      .select("id", "name", "sets", "reps", "weight")
      .where({ id })
      .first();
  }

function add(exercise) {
    return db('exercise')
    .insert(exercise)
    .then(ids => {
        const [id] = ids;
        return findById(id);
      });

}


function update(id, changes) {
    return db('exercise')
      .where('id', id)
      .update(changes)

  }

  function remove(id) {
    return db('exercise')
      .where('id', id)
      .del();
  }