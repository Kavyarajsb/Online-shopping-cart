const express = require("express");
const router = express.Router();
const {
  login, loginsession
} = require("../controllers/controllerLogin");

router.post("/login", login)
router.get("/login", loginsession)

module.exports = router;