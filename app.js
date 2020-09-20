// requiring express module
const express = require("express");

// requiring body parser
const bodyParser = require("body-parser");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.listen(3000, function () {
  console.log("server started at port : 3000");
});
