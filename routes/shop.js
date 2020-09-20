// requiring express
const express = require("express")

// assigining router
const router = express.Router()

router.get("/", (req, res, next) => {
    res.send("<h1>Home Page</h1>");
});

// exporting router
module.exports = router