module.exports = (app) => {
  const transaction = require("../controllers/transaction.controller");

  var router = require("express").Router();

  router.get("/findAll", transaction.findAll);
  router.post("/create", transaction.create);
  app.use("/api/transaction", router);
};
