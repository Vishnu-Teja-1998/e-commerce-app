const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin")
const showRoutes = require("./routes/shop")

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'))

app.use("/admin", adminRoutes);
app.use(showRoutes);


app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"))
});

app.listen(3000, function () {
  console.log(`server started at prot : 3000`);
});