const express = require("express");

const adminContrroller = require("../controllers/admin");

const router = express.Router();

router.get("/", adminContrroller.getProducts);

module.exports = router;