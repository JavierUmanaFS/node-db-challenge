const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) =>{
  db.getResource()
  .then(resources => {
    resources ? res.status(200).json(resources) :
    res.status(404).json({ message: "Couldn't retrieve resources"})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message })
  })
})

router.post("/", (req, res) =>{
  db.addResource(req.body)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err.message })
  })
})

module.exports = router;