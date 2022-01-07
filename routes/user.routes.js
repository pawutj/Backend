module.exports = (app) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  router.get("/findAll", users.findAll);
  router.post("/create", users.create);
  router.get("/findById/:id", users.findById);
  app.use("/api/users", router);
};
