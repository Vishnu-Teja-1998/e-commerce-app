// requiring express module
const express = require("express");

// requiring body parser
const bodyParser = require("body-parser");

const app = express();

// requiring files in  routes folder
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// adding middle-wares -ROUTES
app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.send(`<h1>Page not found</h1>`)
})

app.listen(3000, () => console.log(`Server stared at port : 3000`));