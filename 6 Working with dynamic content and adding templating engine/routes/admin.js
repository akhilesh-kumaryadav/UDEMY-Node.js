const path = require("path");

const express = require("express");

const rootDir = require("../Utility/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  //console.log(req.body.title);
  products.push(req.body.title);
  res.redirect('back');
});

exports.router = router;
exports.products = products;
