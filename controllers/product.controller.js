const db = require("../models");
const { Product, ProductCategory } = db;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  const product = {
    product_name: req.body.product_name,
    price: req.body.price,
    user_id: req.body.user_id,
    product_category_id: req.body.product_category_id,
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
  Product.findAll({
    include: [
      {
        model: ProductCategory,
      },
    ],
  })
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
