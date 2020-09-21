const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs")

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", {
    pageTitle: "Page not Found"
  })
});

app.listen(3000, function () {
  console.log(`server started at port : 3000`);
});