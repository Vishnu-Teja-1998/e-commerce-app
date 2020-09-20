// requiring express module
const express = require("express");

// requiring body parser
const bodyParser = require("body-parser");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(`<form action='products' method='POST'>
    <input type='text' name='title'/>
    <button type='submit'>Add</button>
</form>`);
});

app.post("/products", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(3000, () => console.log(`Server stared at port : 3000`));
