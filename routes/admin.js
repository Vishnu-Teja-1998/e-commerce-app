// requiring path module
const path = require("path")

// requiring express module
const express = require("express")

// assigining router
const router = express.Router()

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
});

router.post("/products", (req, res, next) => {
    console.log(req.body.title);
    res.redirect("/");
});

// exporting router
module.exports = router;