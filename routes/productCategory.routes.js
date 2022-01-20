module.exports = (app) => {
  const productCategory = require("../controllers/productCategory.controller");

  var router = require("express").Router();

  router.get("/findAll", productCategory.findAll);
  router.post("/create", productCategory.create);
  router.post("/update/:product_category_id", productCategory.update);
  router.delete("/delete/:product_category_id", productCategory.delete);
  app.use("/api/productCategory", router);
};
