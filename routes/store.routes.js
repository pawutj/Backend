module.exports = (app) => {
  const store = require("../controllers/store.controller");

  var router = require("express").Router();

  router.get("/findAll", store.findAll);
  router.post("/create", store.create);
  app.use("/api/store", router);
};
