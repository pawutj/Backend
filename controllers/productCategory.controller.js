const db = require("../models");
const ProductCategory = db.ProductCategory;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const productCategory = {
    product_category: req.body.product_category,
    enable: req.body.enable,
  };

  ProductCategory.create(productCategory)
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
  ProductCategory.findAll({})
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
