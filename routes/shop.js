// requiring path module
const path = require("path")

// requiring express
const express = require("express")

// assigining router
const router = express.Router()

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"))
});

// exporting router
module.exports = router