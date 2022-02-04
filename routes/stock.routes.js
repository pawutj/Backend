module.exports = (app) => {
  const stock = require("../controllers/stock.controller");

  var router = require("express").Router();

  router.get("/findAll", stock.findAll);
  router.post("/create", stock.create);
  router.post("/update/:stock_id", stock.update);
  router.post("/quantityAdjust/:stock_id", stock.quantityAdjust);
  app.use("/api/stock", router);
};
