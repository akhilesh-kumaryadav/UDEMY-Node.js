const express = require("express");

const router = express.Router();

const userNames = [];

router.get("/", (req, res, next) => {
  res.render("home", { pageTitle: "Home" });
});

router.post("/names", (req, res, next) => {
  userNames.push({ name: req.body.username });
  res.redirect("/users");
});

exports.router = router;
exports.userNames = userNames;
