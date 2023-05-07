const path = require("path");

const express = require("express");

const rootDir = require("../Utility/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("Middleware 3");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
