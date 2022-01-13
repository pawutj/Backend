const db = require("../models");
const Payment = db.Payment;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const payment = {
        payment_order_id: req.body.payment_order_id,
        user_id: req.body.user_id,
        order_date: req.body.order_date,
        product_id: req.body.product_id,
        purchase_order_quantity: req.body.purchase_order_quantity,
        purchase_order_sub_total: req.body.purchase_order_sub_total,
        purchase_order_total: req.body.purchase_order_total,
        purchase_order_tax: req.body.purchase_order_tax,
    };

    Payment.create(payment)
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
    Payment.findAll({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "error",
            });
        });
};

exports.findById = (req, res) => {
    User.findOne({
      where: { payment_order_id: req.param("id") }, 
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
