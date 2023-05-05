const express = require("express");

const app = express();

/* app.use((req, res, next)=>{
    console.log('Middleware 1');
    next();
})

app.use((req, res, next)=>{
    console.log("Middleware 2");
    res.send("<h1> All the middleware are done</h1>");
}) */

app.use("/users", (req, res, next) => {
  console.log("user page");
  res.send("<h1> Users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1> Home page</h1>");
});

app.listen(3000);
    