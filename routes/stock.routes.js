module.exports = (app) => {
  const stock = require("../controllers/stock.controller");

  var router = require("express").Router();

  router.get("/findAll", stock.findAll);
  router.post("/create", stock.create);
  app.use("/api/stock", router);
};
