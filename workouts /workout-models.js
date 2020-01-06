const db = require('../database/db-config.js')

module.exports = {
    add, 
    find,
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