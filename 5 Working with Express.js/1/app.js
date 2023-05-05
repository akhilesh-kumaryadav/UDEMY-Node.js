const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1> This is product's page </h1>");
});

app.use("/", (req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1> Hello from express </h1>");
});

app.listen(3000);
 