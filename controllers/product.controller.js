const db = require("../models");
const Product = db.Product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const product = {

    product_id: req.body.product_id,
    reorder_level: req.body.reorder_level,
    barcode: req.body.barcode,
    product_name: req.body.product_name,
    unit_id: req.body.unit_id,
    product_unit_in_stock: req.body.product_unit_in_stock,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
    product_unit_price: req.body.product_unit_price,
    product_short_name: req.body.product_short_name,
    product_discount: req.body.product_discount,



   
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
