const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

const errorController = require('./controllers/error');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect(
  "mongodb+srv://admin-vishnu:vishnu123@vishnu-1nuon.mongodb.net/shopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(result => {
  app.listen(3000, function () {
    console.log(`server started on port 3000`);
  })
}).catch(err => console.log(err));