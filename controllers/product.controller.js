const db = require("../models");
const Product = db.Product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    user_id: req.body.user_id,
  };

  Product.create(product)
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
  Product.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.delete = (req, res) => {};
