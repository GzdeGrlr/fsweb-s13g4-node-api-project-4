require("dotenv").config();
const express = require("express");

const server = express();

const port = process.env.port || 3000;

server.use(express.json());

server.listen(port, () => {
  console.log("listening on", port);
});
