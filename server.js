const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const ProjectRouter = require("./api/project-router.js");
const ResourceRouter = require("./api/resource-router.js");

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

server.get("/", (req, res) =>{
  res.status(200).json({ message: "api is running "});
});

module.exports = server;