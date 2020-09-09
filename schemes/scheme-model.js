const db = require("../data/dbconfig");
const { where, del } = require("../data/dbconfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  // need id here
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  // <---- you need to pass id here
  return db("steps").where({ scheme_id: id });
}

function add(schemeData) {
  return db("schemes").insert(schemeData);
}

function update(changes, id) {
  //when update you need changes and id as param
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
  /// need id to be able to delete here
  return db("schemes").where("id", id);
  del();
}
