const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/404")
const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs")

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError);

app.listen(3000, function () {
  console.log(`server started at port : 3000`);
});