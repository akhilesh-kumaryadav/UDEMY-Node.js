exports.error404 = (req, res, next) => {
  console.log(req.url);
  res.status(404).render("404", { pageTitle: "Page Not Found", path: req.url });
}