const path = require("path")
const express = require("express")
const adminRoutes = require("./admin")
const adminController = require("../controllers/admin")

const router = express.Router()

router.get("/", adminController.getProduct)

module.exports = router;