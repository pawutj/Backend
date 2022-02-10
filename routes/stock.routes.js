module.exports = (app) => {
  const stock = require("../controllers/stock.controller");

  var router = require("express").Router();

  router.get("/findAll", stock.findAll);
  router.get("/findAllProduct", stock.findAllProduct);
  router.post("/create", stock.create);
  router.post("/update/:stock_id", stock.update);
  router.post("/quantityAdjust/:stock_id", stock.quantityAdjust);
  router.post("/addStock", stock.addStock);
  router.post("/missingStock", stock.missingStock);
  router.post("/sellStock", stock.sellStock);
  router.post("/setIsEnable", stock.setIsEnable);
  app.use("/api/stock", router);
};
