module.exports = (app) => {
  const productCategory = require("../controllers/productCategory.controller");

  var router = require("express").Router();

  router.get("/findAll", productCategory.findAll);
  router.post("/create", productCategory.create);
  app.use("/api/productCategory", router);
};
