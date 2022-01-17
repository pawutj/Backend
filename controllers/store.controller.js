const db = require("../models");
const Store = db.store;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const store = {
    address: req.body.address,
  };

  Store.create(store)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.findAll = (req, res) => {
  Store.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
