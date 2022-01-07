module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();

  router.get("/findAll", products.findAll);
  router.post("/create", products.create);
  app.use("/api/products", router);
};
