const express = require("express");
const middleware = require("./middleware/config");
const noteRouter = require("./routes/noteRouter.js");

const server = express();

//middleware
middleware(server);

//routes
server.use("/notes", noteRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

module.exports = server;
