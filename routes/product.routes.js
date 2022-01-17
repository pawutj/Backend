module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();

  router.get("/findAll", products.findAll);
  router.post("/create", products.create);
  router.get("/findById/:product_id", products.findById);
  router.post("/update/:product_id", products.update);
  app.use("/api/products", router);
};
