const db = require("../models");
const Stock = db.Stock;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const stock = {
    quantity: req.body.quantity,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
  };

  Stock.create(stock)
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
  Stock.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
