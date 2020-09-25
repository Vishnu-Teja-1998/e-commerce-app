const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

const errorController = require('./controllers/error');
const User = require("./models/user")

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.set("useCreateIndex", true);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5f6d7cca2ec90357e820e03c')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose.connect(
  "mongodb+srv://admin-vishnu:vishnu123@vishnu-1nuon.mongodb.net/shopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: "Visshnnu",
        email: "chilamakurvishnu@gmail.com",
        cart: {
          items: []
        }
      })
      user.save();
    }
  })
  app.listen(3000, () => console.log(`server started on port 3000`));
}).catch(err => console.log(err));