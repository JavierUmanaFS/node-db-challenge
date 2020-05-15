const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  delProject,
  getResource,
  getResourceById,
  addResource,
  delResource,
  getTask,
  getTaskById,
  addTask,
};

function getProjects(){
  return db("project");
}

function getProjectById(id){
  return db("project").where({ id });
}

function addProject(project){
  return db("project")
  .insert(project)
  .then(id => getProjectById(id[0]))
}

function delProject(id){
  return db("project").where({ id }).del();
}

function getResource(){
  return db("resource")
}

function getResourceById(id){
  return db("resource").where({ id });
}

function addResource(resource){
  return db("resource")
  .insert(resource)
  .then(id => getResourceById(id[0]))
}

function delResource(id){
  return db("resource").where({ id }).del();
}

function getTask(){
  return db("task as t")
  .join("project as p", "t.project_id","=","p.id")
  .select("t.id", "t.description", "t.notes", "t.completed", "p.project_name");
// SELECT t.id, t.description, t.notes, p.project_name
// FROM task AS t
// JOIN project AS p ON t.project_id = p.id;
}

function getTaskById(id){
  return db("task").where({ id })
}

function addTask(task){
  return db("task")
  .insert(task)
  .then(id => getTaskById(id[0]))
}