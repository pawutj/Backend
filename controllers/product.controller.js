const db = require("../models");
const { Product, ProductCategory } = db;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  const product = {
    product_name: req.body.product_name,
    price: req.body.price,
    barcode: req.body.barcode,
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

exports.findByBarcode = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { barcode: req.param("barcode") },
    });
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message || "error" });
  }
};

exports.findById = (req, res) => {
  Product.findOne({
    where: { product_id: req.param("product_id") },
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

exports.update = async (req, res) => {
  const product = {
    product_name: req.body.product_name,
    price: req.body.price,
    barcode: req.body.barcode,
    user_id: req.body.user_id,
    product_category_id: req.body.product_category_id,
  };

  try {
    const oldProduct = await Product.findOne({
      where: { product_id: req.param("product_id") },
    });

    oldProduct.set({
      ...product,
    });

    const data = await oldProduct.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.delete = (req, res) => {
  Product.destroy({
    where: {
      product_id: req.param("product_id"),
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
