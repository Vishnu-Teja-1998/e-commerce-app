const path = require("path")
const express = require("express")

const router = express.Router()

router.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Products"
    })
})

router.post("/add-product", (req, res, next) => {
    console.log(req.body.title);
    res.redirect("/")
})

module.exports = router;