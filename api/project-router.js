const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) =>{
  db.getProjects()
  .then(projects =>{
    projects ?
    res.status(200).json(projects) :
    res.status(404).json({ message: "projects not found"})
  })
  .catch(err =>{
    res.status(500).json({ errorMessage: err.message })
  })
})

router.get("/:id", (req, res) =>{
  db.getProjectById(req.params.id)
  .then(project =>{
    project ? 
    res.status(200).json(project)
    : res.status(404).json({ message: "bad request"})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message })
  })
})

router.post("/", (req, res) =>{
  db.addProject(req.body)
  .then(project =>{
    res.status(201).json(project)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message})
  })
})

router.post("/:id/addtask", (req, res) =>{
  db.addTask(req.body)
  .then(task => {
    task ? res.status(201).json(task) :
    res.status(404).json({ message: "task not found"})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message })
  })
})

router.delete("/:id", (req, res) => {
  db.delProject(req.params.id)
  .then(() => {
    res.status(200).json({ message: "Successfully deleted "})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message})
  })
})

// router.get("/tasks/:id", (req, res) =>{
//   db.getTask()
//   .then(tasks =>{
//     res.status(200).json(tasks)
//   })
//   .catch(err => console.log(err))
// })

module.exports = router;