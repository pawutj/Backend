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

exports.delete = (req, res) => {
  ProductCategory.destroy({
    where: {
      product_category_id: req.param("product_category_id"),
    },
  })
  .then((data) => res.sendStatus(200))
  .catch((err) => {
    res.status(500).send({
      message: err.message || "error",
    });
  });
};

exports.update = async (req, res) => {
  const category = {
    product_category: req.body.product_category,
    enable: req.body.enable,
  };

  try {
    const oldCategory = await ProductCategory.findOne({
      where: { product_category_id: req.param("product_category_id") },
    });

    oldCategory.set({
      ...category,
    });

    const data = await oldCategory.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};
