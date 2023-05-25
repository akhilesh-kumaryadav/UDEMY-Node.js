const express = require("express");

const indexRouter = require("./index");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.render("user", { pageTitle: "User", users: indexRouter.userNames });
});

module.exports = router;
