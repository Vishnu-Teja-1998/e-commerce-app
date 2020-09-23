const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

<<<<<<< HEAD
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/404")
=======
>>>>>>> enhancing_the_app
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

<<<<<<< HEAD
app.use(errorController.getError);
=======
app.use(errorController.get404);
>>>>>>> enhancing_the_app

app.listen(3000, function () {
  console.log(`server started on port : 3000`);
});