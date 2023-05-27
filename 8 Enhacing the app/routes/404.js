const express = require("express");

const error404Controller = require('../controllers/404')

const router = express.Router();

router.use(error404Controller.error404);

module.exports = router;
