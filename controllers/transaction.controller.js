const db = require("../models");
const Transaction = db.Transaction;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Transaction.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.create = (req, res) => {
  const transaction = {
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    cost: req.body.cost,
    income: req.body.income,
  };

  Transaction.create(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.createList = async (req, res) => {
  const transactionAddList = req.body;
  try {
    const data = await Promise.all(
      transactionAddList.map((transactionAdd) =>
        Transaction.create({
          product_id: transactionAdd.product_id,
          quantity: transactionAdd.quantity,
          cost: transactionAdd.cost,
          income: 0,
        })
      )
    );

    //res.send(data);
    return data;
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};
