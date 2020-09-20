// requiring express module
const express = require("express")

// assigining router
const router = express.Router()

router.get("/add-product", (req, res, next) => {
    res.send(`<form action='products' method='POST'>
    <input type='text' name='title'/>
    <button type='submit'>Add</button>
</form>`);
});

router.post("/products", (req, res, next) => {
    console.log(req.body.title);
    res.redirect("/");
});

// exporting router
module.exports = router;