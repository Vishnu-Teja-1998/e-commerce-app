const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs")

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", {
<<<<<<< HEAD
    pageTitle: "Page not Found",
  });
=======
    pageTitle: "Page not Found"
  })
>>>>>>> dynamic_rendering
});

app.listen(3000, function () {
  console.log(`server started at port : 3000`);
});