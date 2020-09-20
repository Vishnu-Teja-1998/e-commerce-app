const express = require("express");

const app = express();

app.get("/", function (req, res, next) {
  res.send("<h1>A new shopping app</h1>");
});

app.listen(3000, function () {
  console.log("server started at port : 3000");
});
